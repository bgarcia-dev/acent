<template>
  <q-page>
    <div class="row q-mt-md">
      <p class="col-12 text-center text-bold text-h6">
        {{ showTitle }}
      </p>
    </div>
    <div class="row">
      <app-button-circle
        icon="mdi:head-dots-horizontal-outline"
        :toggleHorizontal="true"
        class="col-4"
        paragraph="Juego de memoria"
        @click="inBuilding"
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
    // TODO: Los juegos disponibles van a ser lectura y asociación
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

    function strategyRead () {
      router.push({ path: '/strategyRead' })
    }

    function strategyRelationship () {
      router.push({ path: '/strategyRelationship' })
    }

    const showTitle = computed(() => {
      const themeStore = useThemeStore()
      const options = [
        '',
        'Agudas, graves, esdrújulas y sobresdrújulas',
        'Palabras tónicas y átonas',
        'Palabras tritónicas'
      ]
      return options[themeStore.groupSelected]
    })

    return {
      inBuilding,
      strategyRead,
      strategyRelationship,
      showTitle
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
