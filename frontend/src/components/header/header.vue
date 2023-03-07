<template>
  <q-header class="headerTitle"
    :class="$q.dark.isActive ? 'header-title--dark' : 'header-title--light'"
  >
    <q-toolbar class="text-white">
      <q-btn
        flat
        round
        dense
        icon="menu" v-if="isRootPath"
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
import { defineComponent, ref, onMounted /* onUnmounted */ } from 'vue'
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
      '/test': 'Test',
      '/makeQueryPage': 'Realiza consulta',
      '/themePage': 'Temas',
      '/challengeModePage': 'Modo reto'
    }

    const handleRouteChange = (to, from) => {
      console.log(`La ruta ha cambiado de ${from.path} a ${to.path}`)

      isRootPath.value = to.path !== '/'
      title.value = routesTitle[to.path]
      if (['makeQueryPage', 'themePage', 'challengeModePage'].includes(to.path)) { redirectPath.value = '/' }
    }

    onMounted(() => {
      // Lógica de path
      console.log('path', router.path)
      if (!['/', undefined, null].includes(router.path)) { isRootPath.value = true }
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
