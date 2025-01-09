<template>
  <div class="search-game">
    <div class="word-counter">
      Palabras encontradas: {{ foundWords }}/{{ words.length }}
    </div>

    <div class="clue" v-if="currentClue">
      <p>Pista: {{ currentClue }}</p>
    </div>
    <div class="no-words" v-else>
      <p>No se encontraron palabras para esta categoría.</p>
    </div>

    <div class="board" v-if="letters.length">
      <div v-for="(row, rowIndex) in letters" :key="'row-' + rowIndex" class="row">
        <div
          v-for="(letter, colIndex) in row"
          :key="'col-' + colIndex"
          class="cell"
          :class="{ selected: isSelected(rowIndex, colIndex) }"
          @click="selectLetter(rowIndex, colIndex)"
        >
          {{ letter }}
        </div>
      </div>
    </div>

    <div class="controls">
      <button @click="resetSelection">Reiniciar selección</button>
    </div>

    <div v-if="showCongratulations" class="modal">
      <p>¡Felicidades! Has encontrado todas las palabras.</p>
      <button @click="nextLevel">Siguiente nivel</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      level: 1,
      foundWords: 0,
      words: [],
      currentClue: '',
      letters: [],
      selectedLetters: [],
      accentType: '', // Inicialmente vacío para asignar correctamente el tipo
      selectedPositions: [],
      showCongratulations: false
    }
  },
  methods: {
    async loadLevel () {
      this.resetGameState()
      console.log(`Cargando nivel para tipo de acentuación: ${this.accentType}`)
      try {
        const response = await fetch(`http://backend:3000/api/searchWords?type=${this.accentType}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log('Datos obtenidos de la API:', data)

        if (data.length > 0) {
          console.log('Palabras obtenidas:', data)
          this.words = data
          this.foundWords = 0
          this.currentClue = this.words[this.foundWords].clue
          this.generateBoard()
        } else {
          console.error('No hay palabras disponibles para esta categoría. Intenta con otra.')
          alert('No hay palabras disponibles para esta categoría. Intenta con otra.')
          this.words = []
          this.letters = []
          this.currentClue = null
          this.showCongratulations = false
        }
      } catch (error) {
        console.error('Error al obtener las palabras:', error)
        this.letters = []
        this.currentClue = null
      }
    },
    generateBoard () {
      if (!this.words || this.words.length === 0) {
        console.error('No hay palabras disponibles para generar el tablero.')
        this.letters = []
        return
      }
      console.log('Generando el tablero con las palabras:', this.words)
      this.letters = Array.from({ length: 11 }, () => Array(11).fill(''))
      this.placeWordsInBoard()
      this.fillEmptyCells()
    },
    getRandomLetter () {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      return letters[Math.floor(Math.random() * letters.length)]
    },
    placeWordsInBoard () {
      this.words.forEach((wordObj) => {
        const word = wordObj.word.toUpperCase()
        let placed = false

        while (!placed) {
          const direction = ['horizontal', 'vertical', 'diagonal'][Math.floor(Math.random() * 3)]
          const row = Math.floor(Math.random() * 7)
          const col = Math.floor(Math.random() * 7)

          if (this.canPlaceWord(word, row, col, direction)) {
            this.insertWord(word, row, col, direction)
            placed = true
          }
        }
      })
    },
    canPlaceWord (word, row, col, direction) {
      if (direction === 'horizontal' && col + word.length <= 11) {
        return word.split('').every((_, i) => !this.letters[row][col + i] || this.letters[row][col + i] === word[i])
      }
      if (direction === 'vertical' && row + word.length <= 11) {
        return word.split('').every((_, i) => !this.letters[row + i][col] || this.letters[row + i][col] === word[i])
      }
      if (direction === 'diagonal' && row + word.length <= 11 && col + word.length <= 11) {
        return word.split('').every((_, i) => !this.letters[row + i][col + i] || this.letters[row + i][col + i] === word[i])
      }
      return false
    },
    insertWord (word, row, col, direction) {
      if (direction === 'horizontal') {
        word.split('').forEach((letter, i) => (this.letters[row][col + i] = letter))
      } else if (direction === 'vertical') {
        word.split('').forEach((letter, i) => (this.letters[row + i][col] = letter))
      } else if (direction === 'diagonal') {
        word.split('').forEach((letter, i) => (this.letters[row + i][col + i] = letter))
      }
    },
    fillEmptyCells () {
      for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
          if (this.letters[row][col] === '') {
            this.letters[row][col] = this.getRandomLetter()
          }
        }
      }
    },
    selectLetter (row, col) {
      if (!this.isSelected(row, col)) {
        this.selectedLetters.push(this.letters[row][col])
        this.selectedPositions.push({ row, col })

        const formedWord = this.selectedLetters.join('')
        if (formedWord === this.words[this.foundWords].word.toUpperCase()) {
          this.foundWords++
          this.selectedLetters = []
          this.selectedPositions = []

          if (this.foundWords < this.words.length) {
            this.currentClue = this.words[this.foundWords].clue
          } else {
            this.showCongratulations = true
          }
        } else if (this.selectedLetters.length >= this.words[this.foundWords].word.length) {
          // Si se forma una palabra incorrecta
          this.selectedPositions.forEach(pos => {
            const cell = document.querySelector(`.row:nth-child(${pos.row + 1}) .cell:nth-child(${pos.col + 1})`)
            if (cell) cell.classList.add('wrong')
          })
          this.resetSelection()
        }
      }
    },
    resetGameState () {
      this.foundWords = 0
      this.words = []
      this.currentClue = ''
      this.letters = []
      this.selectedLetters = []
      this.selectedPositions = []
      this.showCongratulations = false
    },
    resetSelection () {
      this.selectedLetters = []
      this.selectedPositions = []
      document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('wrong'))
    },
    isSelected (row, col) {
      return this.selectedPositions.some((pos) => pos.row === row && pos.col === col)
    },
    nextLevel () {
      if (this.level >= this.words.length) {
        alert('¡Has completado todos los niveles!')
        this.showCongratulations = true
        return
      }
      this.level++
      this.showCongratulations = false
      this.loadLevel()
    }

  },
  async mounted () {
    const groupSelected = this.$route.query.groupSelected
    console.log(`Grupo seleccionado desde la ruta: ${groupSelected}`)
    if (['1', '2', '3'].includes(groupSelected)) {
      this.accentType = groupSelected === '1' ? 'agudas'
        : groupSelected === '2' ? 'tonicas'
          : 'tritonicas'
    } else {
      alert('Categoría no válida. Volviendo a "agudas".')
      this.accentType = 'agudas'
    }
    console.log(`Tipo de acentuación inicial: ${this.accentType}`)
    await this.loadLevel()
  }
}
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(11, 40px);
  gap: 5px;
  justify-content: center;
}
.cell {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #f0f0f0;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
}
.cell.selected {
  background-color: #4caf50;
  color: white;
  pointer-events: none;
}
.cell.wrong {
  background-color: #f44336; /* Rojo */
  color: white;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.controls {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
