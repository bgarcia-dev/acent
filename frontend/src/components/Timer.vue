<template>
  <div>
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
  setup (props, context) {
    const minutes = ref(3)
    const seconds = ref(20)
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
        context.emit('timeout')
      }
    })

    return {
      minutes,
      seconds,
      timeUp
    }
  }
})
</script>
