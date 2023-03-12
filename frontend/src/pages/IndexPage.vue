<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-sm-12 col-md-10">
      <div class="row justify-center q-pa-md">
        <app-button-option
          class="col-10 q-my-lg"
          v-for="(option,index) in listOptions"
          :key="index"
          :icon="option.icon"
          :textTop="option.textTop"
          :textBottom="option.textBottom"
          :to="option.toPage"
        />
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
    const listOptions = [
      {
        icon: 'teenyicons:search-circle-outline',
        textTop: 'Realizar consulta',
        textBottom: '¿Tiene una palabra a buscar?',
        toPage: '/makeQueryPage'
      },
      {
        icon: 'material-symbols:format-list-bulleted-rounded',
        textTop: 'Temas',
        textBottom: 'Practica tu acentuación',
        toPage: '/themePage'
      },
      {
        icon: 'emojione-monotone:thinking-face',
        textTop: 'Modo reto',
        textBottom: 'Pon aprueba lo que sabes...',
        toPage: '/challengeModePage'
      }
    ]
    return { listOptions }
  }
})
</script>
