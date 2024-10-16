<template>
  <div class="multiple-choice-game">
    <div v-if="timer > 0">
      <p>Tiempo restante: {{ timer }} segundos</p>
    </div>
    <div v-if="currentQuestion">
      <div class="multiple-choice-board">
        <h2>{{ currentQuestion.question }}</h2>
        <div class="answers">
          <button
            v-for="answer in shuffledAnswers"
            :key="answer"
            @click="selectAnswer(answer)"
            :class="{
              'answer-correct': selectedAnswer === answer && isCorrectAnswer,
              'answer-incorrect': selectedAnswer === answer && !isCorrectAnswer
            }"
            class="answer-button"
          >
            {{ answer || 'Opción no disponible' }} <!-- Muestra un texto si la opción está vacía -->
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <p>¡Has completado todas las preguntas!</p>
    </div>

    <!-- Popups -->
    <q-dialog v-model="showCongratulationsPopup">
      <div class="popup-content">
        <CongratulationsPopup :attempts="questionsAnswered" :timeLeft="timer" @goToMenu="goToMenu" />
      </div>
    </q-dialog>

    <q-dialog v-model="showTimeUpPopup">
      <div class="popup-content">
        <time-up-popup v-if="showTimeUpPopup" @retry="restartGame" @goToMenu="goToMenu" />
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
      currentQuestion: null,
      questions: [],
      questionsAnswered: 0,
      selectedAnswer: null,
      isCorrectAnswer: false,
      shuffledAnswers: [],
      level: 1,
      timer: 60,
      accentType: 'agudas',
      timerInterval: null
    }
  },
  created () {
    this.fetchQuestions()
    this.startTimer()
  },
  methods: {
    async fetchQuestions () {
      try {
        const response = await fetch(`http://localhost:3000/api/questions?type=${this.accentType}`)
        const data = await response.json()

        if (data && data.length > 0) {
          this.questions = data
          this.currentQuestion = this.questions[0]
          this.shuffledAnswers = this.shuffleAnswers([
            this.currentQuestion.correct_answer,
            this.currentQuestion.wrong_answer1,
            this.currentQuestion.wrong_answer2
          ])
        } else {
          this.currentQuestion = null
        }

        console.log('Preguntas recibidas:', data)
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    },

    shuffleAnswers (answers) {
      return answers.filter(answer => answer).sort(() => Math.random() - 0.5)
    },

    selectAnswer (option) {
      this.selectedAnswer = option
      this.isCorrectAnswer = option === this.currentQuestion.correct_answer

      if (this.isCorrectAnswer) {
        this.questionsAnswered++

        if (this.questionsAnswered < this.questions.length) {
          // Pasa a la siguiente pregunta
          this.currentQuestion = this.questions[this.questionsAnswered]
          this.shuffledAnswers = this.shuffleAnswers([
            this.currentQuestion.correct_answer,
            this.currentQuestion.wrong_answer1,
            this.currentQuestion.wrong_answer2
          ])

          // Restablecer el estado de la respuesta seleccionada para la nueva pregunta
          this.selectedAnswer = null
          this.isCorrectAnswer = false
        } else {
          this.showCongratulations()
        }
      } else {
        console.log('Respuesta incorrecta')
      }
    },

    startTimer () {
      if (this.timerInterval) {
        clearInterval(this.timerInterval)
      }

      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
        } else {
          this.showTimeUp()
          clearInterval(this.timerInterval)
        }
      }, 1000)
    },

    nextLevel () {
      this.level++
      this.questionsAnswered = 0
      this.prepareLevel()
    },

    restartGame () {
      this.showCongratulationsPopup = false
      this.showTimeUpPopup = false
      this.timer = 60
      this.questionsAnswered = 0
      this.currentQuestion = null

      if (this.timerInterval) {
        clearInterval(this.timerInterval)
      }

      this.startTimer()
      this.fetchQuestions()
    },

    showCongratulations () {
      this.showCongratulationsPopup = true
      clearInterval(this.timerInterval)
    },

    showTimeUp () {
      this.showTimeUpPopup = true
      clearInterval(this.timerInterval)
    },

    goToMenu () {
      this.$router.push('/menuStrategiesPage')
    }
  },
  beforeUnmount () {
    if (this.timerInterval) {
      clearInterval(this.timerInterval)
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

    await this.fetchQuestions()

    this.startTimer()
  }
}
</script>

<style scoped>
.popup-content {
  width: 90%;
  max-width: 300px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 9px solid #008080;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.multiple-choice-game {
  text-align: center;
  padding: 20px;
}

.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.answer-button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.answer-button:hover {
  background-color: #ddd;
}

.answer-correct {
  background-color: #4CAF50;
  color: white;
}

.answer-incorrect {
  background-color: #F44336;
  color: white;
}

.popup-content {
  text-align: center;
  padding: 20px;
}
</style>
