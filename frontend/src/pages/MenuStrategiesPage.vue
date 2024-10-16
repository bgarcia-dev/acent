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
        v-if="showMultipleChoice"
        :icon="multipleChoiceIcon"
        :toggleHorizontal="true"
        class="col-4"
        :paragraph="multipleChoiceLabel"
        @click="multipleChoice"
        :disabled="disableMultipleChoice"
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

      <!-- <app-button-circle
        icon="ion:hammer"
        class="col-4"
        paragraph="Armar palabras"
        @click="inBuilding"
      /> -->

      <app-button-circle
        v-if="showPicsWord"
        :icon="PicsWordIcon"
        :toggleHorizontal="true"
        class="col-4"
        :paragraph="PicsWordLabel"
        @click="picsword"
        :disabled="disablePicsWord"
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

    const themeStore = useThemeStore()

    // Función para iniciar el juego de memoria
    function memorygame () {
      const group = themeStore.groupSelected
      if (!group) {
        themeStore.groupSelected = 'agudas'
      }
      router.push({ path: '/memorygame', query: { groupSelected: group } })
    }

    function multipleChoice () {
      const group = themeStore.groupSelected
      if (!group) {
        themeStore.groupSelected = 'agudas'
      }
      router.push({ path: '/multipleChoice', query: { groupSelected: group } })
    }

    function picsword () {
      const group = themeStore.groupSelected
      if (!group) {
        themeStore.groupSelected = 'agudas'
      }
      router.push({ path: '/picsWord', query: { groupSelected: group } })
    }

    function strategyRead () {
      router.push({ path: '/strategyRead' })
    }

    function strategyRelationship () {
      router.push({ path: '/strategyRelationship' })
    }

    const showTitle = computed(() => {
      const options = [
        '',
        'Agudas, graves, esdrújulas y sobresdrújulas',
        'Palabras tónicas y átonas',
        'Palabras tritónicas'
      ]
      return options[themeStore.groupSelected]
    })

    // Juego de memoria
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

    // Seleccion multiple

    const showMultipleChoice = computed(() => {
      return themeStore.groupSelected !== 0
    })

    const multipleChoiceLabel = computed(() => {
      const options = {
        1: 'Selección Multiple',
        2: 'Selección Multiple',
        3: 'Selección Multiple'
      }
      return options[themeStore.groupSelected]
    })

    const multipleChoiceIcon = computed(() => {
      return themeStore.groupSelected === 1
        ? 'ic:twotone-ads-click'
        : 'ic:twotone-ads-click'
    })

    const disableMultipleChoice = computed(() => {
      return themeStore.groupSelected !== 1 && themeStore.groupSelected !== 2 && themeStore.groupSelected !== 3
    })

    // 4 fotos 1 palabra

    const showPicsWord = computed(() => {
      return themeStore.groupSelected !== 0
    })

    const PicsWordLabel = computed(() => {
      const options = {
        1: '4 fotos 1 palabra',
        2: '4 fotos 1 palabra',
        3: '4 fotos 1 palabra'
      }
      return options[themeStore.groupSelected]
    })

    const PicsWordIcon = computed(() => {
      return themeStore.groupSelected === 1
        ? 'wpf:stack-of-photos'
        : 'wpf:stack-of-photos'
    })

    const disablePicsWord = computed(() => {
      return themeStore.groupSelected !== 1 && themeStore.groupSelected !== 2 && themeStore.groupSelected !== 3
    })

    return {
      inBuilding,
      strategyRead,
      strategyRelationship,
      memorygame,
      multipleChoice,
      picsword,
      showTitle,
      showMemoryGame,
      showMultipleChoice,
      memoryGameLabel,
      multipleChoiceLabel,
      memoryGameIcon,
      multipleChoiceIcon,
      disableMemoryGame,
      disableMultipleChoice,
      showPicsWord,
      PicsWordLabel,
      PicsWordIcon,
      disablePicsWord
    }
  }
})
</script>
