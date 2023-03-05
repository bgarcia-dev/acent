<template>
  <q-layout>
      <q-page>
        <app-button-option class="q-ma-lg" />
        <app-button-option class="q-ma-lg" />
        <app-button-option class="q-ma-lg" />
      </q-page>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

import ButtonOption from '../components/buttons/buttonOption'

export default defineComponent({
  name: 'IndexPage',
  components: {
    appButtonOption: ButtonOption
  },
  setup () {
    return {}
  }
})
</script>
