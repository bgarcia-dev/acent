<template>
  <q-header class="headerTitle"
    :class="$q.dark.isActive ? 'header-title--dark' : 'header-title--light'"
  >
    <q-toolbar class="text-white">
      <q-btn
        flat
        round
        dense
        icon="arrow_back" v-if="isRootPath"
        :to="redirectPath"
      />
      <q-toolbar-title
        class="text-center text-weight-bold"
        >
        {{title}}
      </q-toolbar-title>
      <q-btn flat round dense icon="settings_brightness" @click="changeTheme" />
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { Dark } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HeaderTitle',
  setup () {
    // Cambio de Theme Style
    const title = ref('Bienvenido')
    const changeTheme = () => {
      Dark.toggle()
    }

    // Lógica de path
    const isRootPath = ref(false)
    const redirectPath = ref('/')
    const router = useRouter()
    const routesTitle = {
      '/': 'Bienvenido',
      '/test': 'Test', // TODO: Eliminar
      '/makeQueryPage': 'Realiza consulta',
      '/themePage': 'Temas',
      '/challengeModePage': 'Modo reto',
      '/response': 'Consulta',
      '/theoreticalMaterialPage': 'Información teórica',
      '/menuStrategiesPage': 'Selección de juego',
      '/strategiesPage': 'Estrategia ...',
      '/strategyRead': 'Juego de lectura',
      '/strategyRelationship': 'Juego de asociación',
      '/memorygame': 'Juego de Memoria',
      '/multipleChoice': 'Selección Múltiple'
    }

    const handleRouteChange = (to, from) => {
      console.log(`La ruta ha cambiado de ${from.path} a ${to.path}`)

      isRootPath.value = to.path !== '/'
      title.value = routesTitle[to.path]
      redirectPath.value = '/'
      if (['/makeQueryPage', '/themePage', '/challengeModePage'].includes(to.path)) { redirectPath.value = '/' }
      if (['/response'].includes(to.path)) { redirectPath.value = '/makeQueryPage' }
      if (['/theoreticalMaterialPage', '/menuStrategiesPage'].includes(to.path)) { redirectPath.value = '/themePage' }
      if (['/strategiesPage'].includes(to.path)) { redirectPath.value = '/menuStrategiesPage' }
    }

    onMounted(() => {
      // Lógica de path
      const currentPath = router.currentRoute.value.fullPath
      if (!['/', undefined, null].includes(currentPath)) { isRootPath.value = true }
      title.value = routesTitle[currentPath]
      router.beforeEach(handleRouteChange)
    })

    return {
      // Cambio de Theme Style
      changeTheme,
      // Lógica de path
      title,
      isRootPath,
      redirectPath
    }
  }
})
</script>

<style lang="scss" scoped>

.header-title--dark{
  background-color: #111231;
}

.header-title--light{
  background-color: $primary;
}

</style>
