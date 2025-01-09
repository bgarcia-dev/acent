<template>
  <div class="fondo">
    <div class="recuadro">
  <div class="game-container" v-if="currentWord && currentWordImages.length">
    <!-- Mostrar las imágenes en una cuadrícula 2x2 -->
    <div class="image-grid">
      <div v-for="(img, index) in currentWordImages" :key="index" class="image-container">
        <img :src="require(`../assets/4pics1word/${img}`)" alt="Image clue" />
      </div>
    </div>

    <!-- Mostrar las casillas para las letras -->
    <div class="letter-box">
      <span v-for="(letter, index) in answerArray" :key="index" class="letter-box-item">
        {{ letter || '_' }}
      </span>
    </div>

    <!-- Mostrar la pista (clue) debajo de las letras -->
    <div class="clue">
      <p>{{ currentClue }}</p>
    </div>

    <!-- Mostrar el conjunto de letras -->
    <div class="letter-options">
      <button
        v-for="(letter, index) in shuffledLetters"
        :key="index"
        :class="{ used: usedLetters.includes(index) }"
        @click="selectLetter(letter, index)"
        :disabled="usedLetters.includes(index)"
      >
        {{ letter }}
      </button>
    </div>

    <div class="action-buttons">
      <button @click="checkAnswer">Listo</button>
      <button @click="resetWord">Reiniciar</button>
    </div>
  </div>
  </div>
</div>

    <!-- Modal de felicitación -->
    <div v-if="showCongratsModal" class="modal-overlay">
        <div class="modal-content">
          <h2>¡Felicidades!</h2>
          <p>Has completado este nivel.</p>
          <button @click="nextLevel" class="play-button">
            ▶️
          </button>
        </div>
      </div>

</template>

<script>
export default {
  data () {
    return {
      currentWord: '', // La palabra correcta a adivinar
      currentWordImages: [], // Las 4 imágenes asociadas
      answerArray: [], // Array para las letras seleccionadas
      currentClue: '', // Pista para la palabra actual
      shuffledLetters: [], // Letras desordenadas
      usedLetters: [], // Índices de letras ya usadas
      level: 1, // Nivel actual
      accentType: 'agudas', // Tipo de acentuación
      wordsList: [], // Lista de palabras e imágenes
      currentIndex: 0, // Índice de la palabra actual en la lista
      showCongratsModal: false
    }
  },
  methods: {
    async fetchWordsAndImages () {
      try {
        const response = await fetch(`http://localhost:3000/api/picsWords?type=${this.accentType}`)
        const data = await response.json()

        if (Array.isArray(data) && data.length > 0) {
          this.wordsList = data
          this.setCurrentWord()
        } else {
          console.error('La respuesta no contiene datos válidos:', data)
        }
      } catch (error) {
        console.error('Error al obtener las palabras e imágenes:', error)
      }
    },
    setCurrentWord () {
      const wordData = this.wordsList[this.currentIndex]
      this.currentWord = wordData.word
      this.currentWordImages = [wordData.image_1, wordData.image_2, wordData.image_3, wordData.image_4]
      this.currentClue = wordData.clue

      this.answerArray = Array(this.currentWord.length).fill(null)
      this.usedLetters = []
      this.initializeLetters()
    },
    initializeLetters () {
      const wordLetters = this.currentWord.toUpperCase().split('')
      const extraLetters = ['E', 'R', 'S', 'M', 'A', 'I']
      this.shuffledLetters = [...wordLetters, ...extraLetters].sort(() => 0.5 - Math.random())
    },
    selectLetter (letter, index) {
      const emptyIndex = this.answerArray.indexOf(null)
      if (emptyIndex !== -1) {
        this.answerArray[emptyIndex] = letter
        this.usedLetters.push(index)
      }
    },
    checkAnswer () {
      if (this.answerArray.join('').toLowerCase() === this.currentWord.toLowerCase()) {
        this.showCongratsModal = true
      } else {
        alert('Inténtalo de nuevo.')
      }
    },
    nextLevel () {
      this.showCongratsModal = false
      if (this.currentIndex < this.wordsList.length - 1) {
        this.currentIndex++
        this.setCurrentWord()
      } else {
        alert('¡Has completado todos los niveles!')
      }
    },
    resetWord () {
      this.answerArray = Array(this.currentWord.length).fill(null)
      this.usedLetters = [] // Reiniciar letras usadas al resetear
    }
  },
  async mounted () {
    const groupSelected = this.$route.query.groupSelected
    if (groupSelected === '2') {
      this.accentType = 'tonicas'
    } else if (groupSelected === '3') {
      this.accentType = 'tritonicas'
    } else {
      this.accentType = 'agudas'
    }

    await this.fetchWordsAndImages()
  }
}
</script>

<style scoped>
.fondo {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  /* background-image: url('../assets/fondos/4pics.png'); /* Ruta a tu imagen */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed; /* Fija la imagen de fondo en su lugar */
  overflow: hidden; /* Evita desplazamiento extra */
}

.recuadro {
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  max-width: 350px;
  margin: 0 auto; /* Centra horizontalmente */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
}

.game-container {
  max-width: 380px;
  margin: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto; /* Limita la altura total del contenedor */
  overflow-y: hidden; /* Evita el desplazamiento */
}

.image-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-bottom: 5px;
}

.image-container {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.letter-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5px;
}

.letter-box-item {
  font-size: 1.5em;
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.clue {
  text-align: center;
  margin-bottom: 5px;
}

.letter-options {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Seis letras por fila */
  gap: 5px;
  justify-items: center;
  align-content: center;
  margin-bottom: 5px;
}

.letter-options button {
  width: 40px;
  height: 40px;
  font-size: 1em;
  font-style: bold;
  font-weight: bold;
  border: none;
  background-color: #f0f0f0;
  border-radius: 4px;
  cursor: pointer;
}

.letter-options button.used {
  background-color: #b81010;
  color: #888;
  cursor: not-allowed;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.action-buttons button {
  margin: 0 5px;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

/* Modal */
.modal-content {
  background: #ffffff;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: bounceIn 0.5s;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.congrats-title {
  font-size: 2em;
  font-weight: bold;
  color: #FF5722;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

.congrats-message {
  font-size: 1.5em;
  color: #333;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 1.4;
}

.play-button {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1.2em;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background-color: #388E3C;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  /* Para dispositivos móviles más pequeños */
  .recuadro {
    max-width: 90%;
    padding: 15px;
  }
  .game-container {
    max-width: 90%;
    padding: 10px;
  }
  .letter-options button {
    width: 35px;
    height: 35px;
    font-size: 0.9em;
  }
  .play-button {
    padding: 10px 20px;
    font-size: 1em;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Para tablets */
  .recuadro {
    max-width: 80%;
    padding: 20px;
  }
  .game-container {
    max-width: 80%;
    padding: 15px;
  }
  .letter-options button {
    width: 45px;
    height: 45px;
    font-size: 1.1em;
  }
  .play-button {
    padding: 12px 24px;
    font-size: 1.2em;
  }
}

</style>
