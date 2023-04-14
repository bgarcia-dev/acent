<template>
  <q-page>
    <div class="row col-12">
      <p class="col-12 text-center q-mb-md" style="font-size: 18px;">
        <i>Selecciona las palabras mal escritas antes que el tiempo se agote</i>
      </p>

    </div>
    <div class="row justify-center">
      <q-img
        class="col-xs-12 col-md-4"
        :src="require(`../../assets/${image}`)"
        :ratio="4/3"
        spinner-color="primary"
        spinner-size="82px"
        />
      <p class="col-12 text-center q-mt-md"> {{ cantidadPalabrasEncontradas  }} / {{ cantidadTotalDePalabras }}</p>
    </div>
    <div class="row col-12 q-px-md q-pt-sm" wrap>
      <p class="text-justify" style="font-size: 21px;">
        <span
        v-for="element in valores"
        :key="element.uuid"
        @click="checkWord($event,element)"
        >
        {{ element.text }}
      </span>
      </p>
    </div>
    <div class="row col-12 justify-center q-mt-lg">
      <app-timer @timeout="handlerEvent"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useThemeStore } from '../../stores/themes'
import { Notify } from 'quasar'
import Timer from '../../components/Timer.vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'StrategyRead',
  components: {
    appTimer: Timer
  },
  setup () {
    const errorMsg = {
      message: '<b>ERROR: No se puede consultar la información intente más tarde</b>',
      color: 'red',
      icon: 'dangerous',
      html: true
    }

    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected

    const buffer = ref('')
    const valores = ref('')
    const cantidadTotalDePalabras = ref(5)
    const cantidadPalabrasEncontradas = ref(0)
    const image = ref('img01.png')
    const numberExcersice = ref(1)

    function checkWord (event, element) {
      if (element.status === false && element.isEvaluable) {
        const elementoHTML = event.target
        elementoHTML.classList.add('text-green')
        element.status = true
        element.text = element.correctValue
        cantidadPalabrasEncontradas.value++

        Notify.create({
          message: `<b>Palabra ${element.accentuation}</b>`,
          color: 'indigo',
          html: true,
          timeout: 300,
          position: 'bottom-left',
          icon: 'thumb_up'
        })

        if (cantidadPalabrasEncontradas.value === cantidadTotalDePalabras.value) {
          const sizeExercises = buffer.value.length
          if (numberExcersice.value !== sizeExercises) {
            valores.value = buffer.value[numberExcersice.value].content
            image.value = buffer.value[numberExcersice.value].image_path
            cantidadTotalDePalabras.value = buffer.value[numberExcersice.value].total_words
            cantidadPalabrasEncontradas.value = 0
            numberExcersice.value++
            // Mensaje de progreso exitoso
            Notify.create({
              color: 'green',
              html: true,
              position: 'center',
              icon: 'thumb_up',
              timeout: 100
            })
          }

          if (numberExcersice.value === sizeExercises) { console.log('COMPLETE GAME') }
        }
      }
    }

    function handlerEvent (infoAdicional) {
      console.log('Evento recibido del componente hijo con información adicional:', infoAdicional)
    }

    onMounted(() => {
      // Cargamos los datos para la lectura
      api.get(`strategy-read/elements/${'AGES'}`).then(({ data }) => {
        buffer.value = data.data
        valores.value = buffer.value[0].content
        cantidadTotalDePalabras.value = buffer.value[0].total_words
        image.value = buffer.value[0].image_path
      }).catch(() => {
        Notify.create(errorMsg)
      })
    })

    return {
      groupSelected,
      checkWord,
      valores,
      cantidadTotalDePalabras,
      cantidadPalabrasEncontradas,
      handlerEvent,
      image
    }
  }
})
</script>
