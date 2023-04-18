<template>
  <div>
    <p v-if="buttonPressed">Tardaste {{ secondsElapsed }} segundos en presionar el botón.</p>
    <button @click="handleClick" v-if="!buttonPressed">Presiona el botón</button>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'ExampleEjemplo',
  setup () {
    const buttonPressed = ref(false)
    const startTime = ref(null)
    const endTime = ref(null)

    const secondsElapsed = computed(() => {
      if (buttonPressed.value) {
        const elapsed = Math.floor((endTime.value - startTime.value) / 1000)
        return `${Math.floor(elapsed / 60)} : ${(elapsed % 60).toString().padStart(2, '0')}`
      } else {
        return null
      }
    })

    function handleClick () {
      if (!buttonPressed.value) {
        buttonPressed.value = true
        endTime.value = null
        startTime.value = Date.now()
      } else {
        endTime.value = Date.now()
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleClick)
    })

    return {
      buttonPressed,
      secondsElapsed,
      handleClick
    }
  }
}
</script>
