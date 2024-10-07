<template>
  <q-page>
    <div class="row col-12">
      <p class="col-12 text-center q-mb-md" style="font-size: 18px;">
        Encuentra los pares de palabras con y sin acento
      </p>
    </div>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-8 q-gutter-md">
        <div v-for="(card, index) in cards" :key="index" class="card" @click="flipCard(index)">
          <div :class="{ flipped: card.isFlipped, matched: card.isMatched }">
            <span v-if="card.isFlipped || card.isMatched">{{ card.text }}</span>
            <span v-else>?</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-12 justify-center q-mt-lg">
      <app-timer @timeout="handlerEvent"/>
    </div>

    <!-- Diálogos similares a los de StrategyRead.vue -->
    <!-- ... -->

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
// import { useThemeStore } from '../../stores/themes'
// import { Notify, Dark } from 'quasar'
import Timer from '../../components/Timer.vue'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MemoryGame',
  components: {
    appTimer: Timer
  },
  setup () {
    const cards = ref([])
    const flippedCards = ref([])
    const matchedPairs = ref(0)
    const attempts = ref(0)
    const fullWidth = ref(false)
    const dialogTimeout = ref(false)

    const startTime = ref(null)
    const endTime = ref(null)
    const timeUser = ref(null)

    async function fetchWords () {
      try {
        const response = await api.get('/api/words')
        console.log('Palabras obtenidas:', response.data) // Log para verificar si las palabras se están obteniendo
        initializeCards(response.data)
      } catch (error) {
        console.error('Error fetching words:', error)
      }
    }

    function initializeCards (words) {
      cards.value = words.flatMap(word => [
        { id: word.id, text: word.word_no_accent, isFlipped: false, isMatched: false, hasAccent: false },
        { id: word.id, text: word.word_with_accent, isFlipped: false, isMatched: false, hasAccent: true }
      ])
      console.log('Cartas generadas:', cards.value) // Verifica las cartas generadas
      shuffleCards()
    }

    function shuffleCards () {
      for (let i = cards.value.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards.value[i], cards.value[j]] = [cards.value[j], cards.value[i]]
      }
    }

    function flipCard (index) {
      if (flippedCards.value.length < 2 && !cards.value[index].isFlipped && !cards.value[index].isMatched) {
        cards.value[index].isFlipped = true
        flippedCards.value.push(index)
        if (flippedCards.value.length === 2) {
          checkForMatch()
        }
      }
    }

    function checkForMatch () {
      const [firstIndex, secondIndex] = flippedCards.value
      const firstCard = cards.value[firstIndex]
      const secondCard = cards.value[secondIndex]

      if (firstCard.id === secondCard.id && firstCard.hasAccent !== secondCard.hasAccent) {
        cards.value[firstIndex].isMatched = true
        cards.value[secondIndex].isMatched = true
        matchedPairs.value++
        if (matchedPairs.value === cards.value.length / 2) {
          endGame()
        }
      } else {
        setTimeout(() => {
          cards.value[firstIndex].isFlipped = false
          cards.value[secondIndex].isFlipped = false
        }, 1000)
      }

      flippedCards.value = []
      attempts.value++
    }

    function endGame () {
      fullWidth.value = true
      endTime.value = Date.now()
      const elapsed = Math.floor((endTime.value - startTime.value) / 1000)
      timeUser.value = `${Math.floor(elapsed / 60)} : ${(elapsed % 60).toString().padStart(2, '0')}`
    }

    function handlerEvent () {
      dialogTimeout.value = true
    }

    onMounted(() => {
      fetchWords()
      startTime.value = Date.now()
    })

    const router = useRouter()
    const onDialogHide = () => {
      router.push({ path: '/menuStrategiesPage' })
    }

    return {
      cards,
      flipCard,
      matchedPairs,
      attempts,
      handlerEvent,
      fullWidth,
      timeUser,
      onDialogHide,
      dialogTimeout
    }
  }
})
</script>

<style lang="scss" scoped>
/* Estilos similares a los de StrategyRead.vue */
/* ... */

.card {
  width: 100px;
  height: 150px;
  margin: 10px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  border: 2px solid #333;
  perspective: 1000px;
}

.card > div {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.flipped {
  transform: rotateY(180deg);
}

.matched {
  background-color: lightgreen;
}

.card span {
  display: block;
  font-size: 24px;
}
</style>
