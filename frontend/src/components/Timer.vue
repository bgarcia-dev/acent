<template>
  <div @click="emitirEvento">
    <div class="text-center">
      Tiempo restante: <br>
      {{ minutes }} : {{ seconds < 10 ? '0' : '' }}{{ seconds }}
    </div>
    <div v-if="timeUp">Time's up!</div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'timerComponent',
  emits: ['timeout'],
  setup () {
    const minutes = ref(2)
    const seconds = ref(0)
    const timeUp = ref(false)

    const countdown = () => {
      if (seconds.value > 0) {
        seconds.value--
      } else {
        if (minutes.value === 0) {
          timeUp.value = true
          return
        }
        minutes.value--
        seconds.value = 59
      }
    }

    const timer = setInterval(countdown, 1000)
    watch(timeUp, (value) => {
      if (value) {
        clearInterval(timer)
      }
    })

    function emitirEvento () {
      this.$emit('timeout', 'xxxx')
    }

    return {
      minutes,
      seconds,
      timeUp,
      emitirEvento
    }
  }
})
</script>
