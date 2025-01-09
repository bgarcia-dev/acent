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
          @click="option.click"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ButtonOption from '../components/buttons/buttonOption'
// import { Notify } from 'quasar'

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
        toPage: '/makeQueryPage',
        click: () => {}
      },
      {
        icon: 'material-symbols:format-list-bulleted-rounded',
        textTop: 'Temas',
        textBottom: 'Información acerca de la acentuación',
        toPage: '/themePage',
        click: () => {}
      },
      {
        icon: 'emojione-monotone:thinking-face',
        textTop: 'Modo reto',
        textBottom: 'Pon aprueba tus habilidades...',
        toPage: '/challengeModePage',
        click: () => {}
      }
      /* {
        click: () => {
          Notify.create({
            message: '<b>En construcción:</b> Próximamente disponible',
            color: 'dark',
            icon: 'build_circle',
            html: true,
            actions: [{ icon: 'close', color: 'white' }],
            timeout: 500
          })
        }
      } */
    ]
    return { listOptions }
  }
})
</script>
