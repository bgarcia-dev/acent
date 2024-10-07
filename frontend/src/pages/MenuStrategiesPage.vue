<template>
  <q-page>
    <div class="row q-mt-md">
      <p class="col-12 text-center text-bold text-h6">
        {{ showTitle }}
      </p>
    </div>
    <div class="row">
      <app-button-circle
        v-if="showMemoryGame"
        :icon="memoryGameIcon"
        :toggleHorizontal="true"
        class="col-4"
        :paragraph="memoryGameLabel"
        @click="memorygame"
        :disabled="disableMemoryGame"
      />
      <app-button-circle
        icon="ic:twotone-ads-click"
        class="col-4"
        paragraph="Selección multiple"
        @click="inBuilding"
      />
      <app-button-circle
        icon="carbon:chart-relationship"
        class="col-4"
        paragraph="Juego asociación"
        @click="strategyRelationship"
      />

      <app-button-circle
        icon="fluent-emoji-high-contrast:detective"
        class="col-4"
        paragraph="Juego búsqueda"
        @click="inBuilding"
      />

      <app-button-circle
        icon="ion:hammer"
        class="col-4"
        paragraph="Armar palabras"
        @click="inBuilding"
      />
      <app-button-circle
        icon="game-icons:read"
        class="col-4"
        paragraph="Juego lectura"
        @click="strategyRead"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue'
import ButtonCircle from '../components/buttons/buttonCircle'
import { Notify } from 'quasar'
import { useRouter } from 'vue-router'
import { useThemeStore } from '../stores/themes'

export default defineComponent({
  name: 'MenuStrategiesPage',
  components: {
    appButtonCircle: ButtonCircle
  },
  setup () {
    const router = useRouter()

    function inBuilding () {
      Notify.create({
        message: '<b>En construcción:</b> Próximamente disponible',
        color: 'dark',
        icon: 'build_circle',
        html: true,
        actions: [{ icon: 'close', color: 'white' }],
        timeout: 500
      })
    }

    // Función para iniciar el juego de memoria
    function memorygame () {
      const group = themeStore.groupSelected
      router.push({ path: '/memorygame', query: { groupSelected: group } })
    }

    function strategyRead () {
      router.push({ path: '/strategyRead' })
    }

    function strategyRelationship () {
      router.push({ path: '/strategyRelationship' })
    }

    const themeStore = useThemeStore()

    const showTitle = computed(() => {
      const options = [
        '',
        'Agudas, graves, esdrújulas y sobresdrújulas',
        'Palabras tónicas y átonas',
        'Palabras tritónicas'
      ]
      return options[themeStore.groupSelected]
    })

    const showMemoryGame = computed(() => {
      return themeStore.groupSelected !== 0
    })

    const memoryGameLabel = computed(() => {
      const options = {
        1: 'Juego de Memoria',
        2: 'Juego de Memoria',
        3: 'Juego de Memoria'
      }
      return options[themeStore.groupSelected]
    })

    const memoryGameIcon = computed(() => {
      return themeStore.groupSelected === 1
        ? 'mdi:head-dots-horizontal-outline'
        : 'mdi:head-question-outline'
    })

    const disableMemoryGame = computed(() => {
      return themeStore.groupSelected !== 1 && themeStore.groupSelected !== 2 && themeStore.groupSelected !== 3
    })

    return {
      inBuilding,
      strategyRead,
      strategyRelationship,
      memorygame,
      showTitle,
      showMemoryGame,
      memoryGameLabel,
      memoryGameIcon,
      disableMemoryGame
    }
  }
})
</script>
