<template>
  <!-- <q-page class="bg-blue">
    <div class="row justify-center">
      <app-button-option class="col-12" />
      <app-button-option class="col-12" />
      <app-button-option class="col-12" />
    </div>
  </q-page> -->

<div class="row justify-center bg-dark">
  <div class="col-xs-12 col-sm-12 col-md-10 bg-blue">
    <div class="row justify-center q-pa-md">
      <app-button-option  class="col-10 q-my-md" />
      <app-button-option  class="col-10 q-my-md" />
      <app-button-option  class="col-10 q-my-md" />
    </div>

  </div>
</div>
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
