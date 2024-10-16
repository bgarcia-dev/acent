<template>
  <div class="image-board" v-if="currentWord && currentWordImages.length">
    <!-- Mostrar las imágenes en una cuadrícula 2x2 -->
    <div class="image-grid">
      <img v-for="(img, index) in currentWordImages" :key="index" :src="img" alt="Image clue" />
    </div>

    <!-- Mostrar las casillas para las letras -->
    <div class="letter-box">
      <span v-for="(letter, index) in answerArray" :key="index" class="letter-box-item">
        {{ letter || '_' }} <!-- Muestra la letra o un guion bajo si está vacía -->
      </span>
    </div>

    <!-- Mostrar el conjunto de letras -->
    <div class="letter-options">
      <button v-for="(letter, index) in shuffledLetters" :key="index" @click="selectLetter(letter)">
        {{ letter }}
      </button>
    </div>

    <div class="action-buttons">
      <button @click="checkAnswer">Check Answer</button>
      <button @click="resetWord">Reset</button>
    </div>
  </div>

  <!-- Mostrar un mensaje de carga mientras los datos se obtienen -->
  <div v-else>
    Cargando...
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentWord: '', // La palabra correcta a adivinar (obtenida de la base de datos)
      currentWordImages: [], // Las 4 imágenes asociadas (obtenidas de la base de datos)
      answerArray: [], // Array para las letras seleccionadas
      shuffledLetters: [], // Letras desordenadas disponibles para elegir
      level: 1, // Nivel inicial o id de la palabra
      accentType: 'agudas'
    }
  },
  methods: {
    async fetchWordAndImages () {
      try {
        const response = await fetch(`http://localhost:3000/api/picsWords?type=${this.accentType}`)
        const data = await response.json()

        // Verificar si la respuesta contiene la palabra y las imágenes
        if (data && data.word && data.image_1 && data.image_2 && data.image_3 && data.image_4) {
          this.currentWord = data.word
          this.currentWordImages = [data.image_1, data.image_2, data.image_3, data.image_4]

          this.answerArray = Array(this.currentWord.length).fill(null)
          this.initializeLetters()
        } else {
          console.error('Los datos recibidos son inválidos:', data)
        }
      } catch (error) {
        console.error('Error al obtener la palabra e imágenes:', error)
      }
    },
    initializeLetters () {
      const wordLetters = this.currentWord.toUpperCase().split('') // Separar la palabra en letras
      const extraLetters = ['E', 'R', 'S', 'M', 'A', 'I'] // Letras adicionales para confundir al usuario
      this.shuffledLetters = [...wordLetters, ...extraLetters].sort(() => 0.5 - Math.random())
    },
    selectLetter (letter) {
      // Coloca la letra en el siguiente cuadro vacío
      const emptyIndex = this.answerArray.indexOf(null)
      if (emptyIndex !== -1) {
        this.answerArray[emptyIndex] = letter
      }
    },
    checkAnswer () {
      // Verificar si la palabra seleccionada es correcta
      if (this.answerArray.join('').toLowerCase() === this.currentWord) {
        alert('¡Correcto!')
        // Aquí podrías pasar al siguiente nivel
      } else {
        alert('Inténtalo de nuevo.')
      }
    },
    resetWord () {
      // Reinicia el juego
      this.answerArray = Array(this.currentWord.length).fill(null)
    }
  },
  async mounted () {
    // Dependiendo del grupo seleccionado, ajusta el tipo de acento para el fetch
    const groupSelected = this.$route.query.groupSelected
    if (groupSelected === '2') {
      this.accentType = 'tonicas'
    } else if (groupSelected === '3') {
      this.accentType = 'tritonicas'
    } else {
      this.accentType = 'agudas'
    }

    await this.fetchWordAndImages()

    // this.startTimer()
  }
}
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.letter-box {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.letter-box-item {
  font-size: 2em;
  margin: 0 10px;
}

.letter-options {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.letter-options button {
  margin: 5px;
  padding: 10px;
  font-size: 1.2em;
}

.action-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.action-buttons button {
  margin: 0 10px;
  padding: 10px;
  font-size: 1.2em;
}
</style>
