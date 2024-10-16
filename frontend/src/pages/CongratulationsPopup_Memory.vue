<template>
  <div class="congratulations-popup">
    <div class="background">
      <p class="main-text">¡FELICIDADES!</p>
      <p class="sub-text">Has completado todos los niveles</p>
    </div>
    <div class="resultados">
      <p>Intentos: {{ attempts }}</p>
      <p>Tiempo restante: {{ formatTime(timeLeft) }}</p>
    </div>
    <q-btn class="boton" @click="goToMenu" label="Volver" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    attempts: {
      type: Number,
      required: true
    },
    timeLeft: {
      type: Number,
      required: true
    }
  },
  setup () {
    const router = useRouter()

    const goToMenu = () => {
      router.push({ path: '/menuStrategiesPage' })
    }

    return {
      goToMenu
    }
  },
  methods: {
    formatTime (time) {
      const minutes = Math.floor(time / 60)
      const seconds = time % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  }
}
</script>

<style scoped>
.congratulations-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 300px;
  height: auto;
  margin: auto;
}

.background {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.main-text {
  font-size: 2.5em;
  font-weight: bold;
  color: #008080;
  text-shadow: 2px 2px 5px black;
  margin: 10px 0;
}

.sub-text {
  font-size: 1.5em;
  font-weight: bold;
  color: #ff6600;
  text-shadow: 1px 1px 3px rgba(255, 102, 0, 0.7);
  margin: 10px 0;
}

.boton {
  background-color: #008080;
  border: 2px solid black;
  margin-top: 20px;
}

.resultados {
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin: 20px 0;
  width: 100%;
  text-align: center;
}

@media (min-width: 768px) {
  .congratulations-popup {
    max-width: 50%;
  }
}

@media (min-width: 1024px) {
  .congratulations-popup {
    max-width: 40%;
  }
}
</style>
