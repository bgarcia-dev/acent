<template>
  <div class="time-up-popup">
    <div class="background">
      <p class="main-text">¡Se acabó el tiempo!</p>
      <p class="sub-text">Nivel fallado</p>
    </div>
    <div class="acciones">
      <q-btn class="boton" @click="emitRetry" label="Reintentar" />
      <q-btn class="boton" @click="goToMenu" label="Volver al menú" />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup (props, { emit }) {
    const router = useRouter()

    const emitRetry = () => {
      emit('retry')
    }

    const goToMenu = () => {
      router.push({ path: '/menuStrategiesPage' })
    }

    return {
      emitRetry,
      goToMenu
    }
  }
}
</script>

<style scoped>
.time-up-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  width: 90%; /* Ajusta el ancho al 90% del contenedor */
  max-width: 300px; /* Limita el ancho máximo */
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
  color: #ff0000; /* Color rojo para indicar tiempo agotado */
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

.acciones {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

@media (min-width: 768px) {
  .time-up-popup {
    max-width: 50%;
  }
}

@media (min-width: 1024px) {
  .time-up-popup {
    max-width: 40%;
  }
}
</style>
