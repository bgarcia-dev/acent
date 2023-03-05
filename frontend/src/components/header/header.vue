<template>
  <q-header class="headerTitle"
    :class="$q.dark.isActive ? 'header-title--dark' : 'header-title--light'"
  >
    <q-toolbar class="text-white">
      <!-- <q-btn flat round dense icon="menu" /> -->
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
import { defineComponent, ref } from 'vue'
import { Dark } from 'quasar'

export default defineComponent({
  name: 'HeaderTitle',
  setup () {
    const title = ref('Bienvenido')
    const changeTheme = () => {
      Dark.toggle()
    }
    return {
      changeTheme,
      title
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
