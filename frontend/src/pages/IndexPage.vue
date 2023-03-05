<template>
  <q-layout>

    <q-header >
      <q-toolbar>
        <q-space />
        <q-toolbar-title>
          Bienvenido
        </q-toolbar-title>
        <q-space />
        <q-btn flat round dense icon="settings_brightness" @click="changeTheme" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>

        <app-button-option class="q-ma-lg" />
        <app-button-option class="q-ma-lg" />
        <app-button-option class="q-ma-lg" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { Dark } from 'quasar'

import ButtonOption from '../components/buttons/buttonOption'

export default defineComponent({
  name: 'IndexPage',
  components: {
    appButtonOption: ButtonOption
  },
  setup () {
    const changeTheme = () => {
      Dark.toggle()
    }
    return {
      changeTheme
    }
  }
})
</script>
