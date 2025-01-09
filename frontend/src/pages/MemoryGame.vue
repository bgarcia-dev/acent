<template>
  <div>
    <div v-if="gameCompleted">
      <CongratulationsPage :attempts="attempts" :timeLeft="timeLeft" />
    </div>
    <div v-else-if="timeUp">
      <TimeUpPage @retry="resetGame" />
    </div>
    <div class="memory-game">
      <div class="game-header">
        <div class="buttons-box">
          <q-btn @click="showHint" label="Pista" />
          <q-btn @click="resetGame" label="Reiniciar juego" />
          <q-btn :label="'Nivel: ' + level" />
        </div>
      </div>

      <div class="cards-container">
        <div
          class="card"
          v-for="(card, index) in displayedCards"
          :key="index"
          @click="flipCard(index)"
          :class="{ flipped: card.flipped, matched: card.matched }"
        >
          <span v-if="card.flipped || card.matched">{{ card.word }}</span>
          <span v-else>?</span>
        </div>
      </div>

      <div class="stats-box">
        <div class="timer-box">
          <q-icon name="hourglass_empty" />
          <span>{{ formatTime(timeLeft) }}</span>
        </div>
        <div class="pairs-box">
          <q-icon name="mdi-cards-playing-outline" />
          <span>{{ pairsFound }}</span>
        </div>
      </div>
    </div>

    <q-dialog v-model="showCongratulationsPopup">
      <div class="popup-content">
        <CongratulationsPopup :attempts="attempts" :timeLeft="timeLeft" @goToMenu="goToMenu" />
      </div>
    </q-dialog>

    <q-dialog v-model="showTimeUpPopup">
      <div class="popup-content">
        <time-up-popup v-if="showTimeUpPopup" @retry="resetGame" @goToMenu="goToMenu" />
      </div>
    </q-dialog>
  </div>
</template>

<script>
import CongratulationsPopup from './CongratulationsPopup_Memory.vue'
import TimeUpPopup from './TimeUpPopup_Memory.vue'

export default {
  components: {
    CongratulationsPopup,
    TimeUpPopup
  },
  data () {
    return {
      showCongratulationsPopup: false,
      showTimeUpPopup: false,
      cards: [],
      displayedCards: [],
      flippedCards: [],
      attempts: 0,
      pairsFound: 0,
      level: 1,
      timeLeft: 60,
      timer: null,
      gameActive: true,
      hintUsed: false,
      accentType: 'agudas',
      flippingBlocked: false
    }
  },
  methods: {
    async fetchWords () {
      try {
        // Cambiar la URL del endpoint para aceptar el tipo de acentuación
        const response = await fetch(`http://backend:3000/api/words?type=${this.accentType}`)
        const data = await response.json()

        // Verifica que las palabras recibidas coincidan con el tipo de acento esperado
        console.log('Palabras recibidas:', data)

        // Filtrar solo las palabras del tipo de acento correspondiente ('agudas', 'tonicas' o 'tritonicas')
        this.cards = data.flatMap((word) => ([{
          id: word.id,
          word: word.word_with_accent,
          accent: true,
          flipped: false,
          matched: false
        },
        {
          id: word.id,
          word: word.word_no_accent,
          accent: false,
          flipped: false,
          matched: false
        }]))

        this.prepareLevel()
      } catch (error) {
        console.error('Error fetching words:', error)
      }
    },
    prepareLevel () {
      const pairsPerLevel = 3 // 3 pares por nivel
      const totalPairsAvailable = Math.floor(this.cards.length / 2)
      const startIndex = (this.level - 1) * pairsPerLevel
      const endIndex = startIndex + pairsPerLevel

      // Si no hay suficientes cartas para otro nivel, mostrar el popup de felicitaciones
      if (startIndex >= totalPairsAvailable) {
        this.gameActive = false
        clearInterval(this.timer)
        this.showCongratulations()
        return
      }

      const currentLevelCards = this.cards.slice(startIndex * 2, endIndex * 2)

      this.displayedCards = [...currentLevelCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({
          ...card,
          flipped: false,
          matched: false
        }))
    },
    showHint () {
      if (this.hintUsed || !this.gameActive) return // No dar pista si el juego no está activo o ya se usó la pista anteriormente

      const hiddenCards = this.displayedCards.filter(card => !card.flipped && !card.matched)
      if (hiddenCards.length > 0) {
        const randomCard = hiddenCards[Math.floor(Math.random() * hiddenCards.length)]
        randomCard.flipped = true

        // Marcar que la pista ya fue utilizada y queda inutilizable por este nivel
        this.hintUsed = true

        // Después de 1.5 segundos, volver a ocultar la carta de pista
        setTimeout(() => {
          randomCard.flipped = false
        }, 1500)
      }
    },
    flipCard (index) {
      if (!this.gameActive || this.flippingBlocked || this.displayedCards[index].flipped) return
      // Voltear la carta solo si no hay dos cartas volteadas ya
      if (this.flippedCards.length < 2) {
        this.displayedCards[index].flipped = true
        this.flippedCards.push(index)
        // Solo si hay dos cartas volteadas se bloquea el voltear más
        if (this.flippedCards.length === 2) {
          this.flippingBlocked = true
          this.attempts++
          this.checkMatch()
        }
      }
    },
    checkMatch () {
      const [firstIndex, secondIndex] = this.flippedCards
      const firstCard = this.displayedCards[firstIndex]
      const secondCard = this.displayedCards[secondIndex]

      // Comparación de las cartas
      if (firstCard.id === secondCard.id && firstCard.accent !== secondCard.accent) {
        firstCard.matched = true
        secondCard.matched = true
        this.pairsFound++
        this.$forceUpdate()
        this.flippingBlocked = false
      } else {
        setTimeout(() => {
          if (!firstCard.matched) firstCard.flipped = false
          if (!secondCard.matched) secondCard.flipped = false
          this.flippingBlocked = false
        }, 1000)
      }
      this.flippedCards = []

      if (this.pairsFound === this.displayedCards.length / 2) {
        this.nextLevel()
      }
    },
    nextLevel () {
      this.level++
      this.pairsFound = 0
      this.hintUsed = false
      this.prepareLevel()
    },
    resetGame () {
      this.showCongratulationsPopup = false
      this.showTimeUpPopup = false
      this.gameCompleted = false
      this.timeUp = false
      this.level = 1
      this.attempts = 0
      this.pairsFound = 0
      this.hintUsed = false
      this.gameActive = true
      this.timeLeft = 60

      if (this.timer) {
        clearInterval(this.timer)
      }
      this.startTimer()
      this.prepareLevel()
    },
    formatTime (time) {
      const minutes = Math.floor(time / 60)
      const seconds = time % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    },
    checkGameStatus () {
      if (this.level > 4) {
        this.gameCompleted = true
        clearInterval(this.timer)
        this.showCongratulations()
      }
    },
    showCongratulations () {
      this.showCongratulationsPopup = true
    },
    showTimeUp () {
      this.showTimeUpPopup = true
    },
    goToMenu () {
      this.$router.push({ name: 'menuStrategiesPage' })
    },

    retry () {
      this.showTimeUpPopup = false
      this.resetGame()
    },
    startTimer () {
      if (this.timer) {
        clearInterval(this.timer) // Limpiar el temporizador si ya está en marcha
      }
      this.timer = setInterval(() => {
        this.timeLeft--
        if (this.timeLeft === 0) {
          clearInterval(this.timer)
          this.timeUp = true
          this.showTimeUp()
        }
      }, 1000)
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

    await this.fetchWords()

    this.startTimer()
  }
}
</script>

<style scoped>
.popup-content {
  width: 90%; /* Ajusta el ancho al 90% del contenedor */
  max-width: 300px; /* Limita el ancho máximo */
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white; /* Cambiado a blanco */
  border: 9px solid #008080; /* Agregado borde negro */
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>

<style scoped>
.memory-game {
  text-align: center;
  padding: 20px;
}

.game-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 70px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.card {
  width: 100px;
  height: 120px;
  background-color: #add8e6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #000;
  flex-basis: calc(30% - 10px);
  overflow: hidden;
  text-align: center;
  border: double;
}

.card span {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 14px;
}

.card.flipped,
.card.matched {
  background-color: #4caf50;
  color: white;
}

.stats-box {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.timer-box,
.pairs-box {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.timer-box q-icon,
.pairs-box q-icon {
  margin-right: 5px;
}
</style>
