<template>
  <q-layout view="hHh Lpr fFf" wrap>
    <header-title/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderTitle from '../components/header/header'

export default defineComponent({
  name: 'MainLayout',
  components: { HeaderTitle },
  setup () {
    const pageTitle = ref('Mi aplicación')

    return {
      pageTitle
    }
  }
})

</script>
