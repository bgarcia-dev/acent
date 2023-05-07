<template>
  <q-page>
    <div class="row col-12">
      <p class="col-12 text-h6 text-center q-mb-md q-mt-sm">
        Asocia la palabra con su significado
      </p>
    </div>

    <div class="row col-12" v-for="(element,index) in elements" :key="element.uuid" >

      <div class="col-4 col-md-2 q-px-md q-py-md">
        <div
          v-ripple
          class="relative-position flex flex-center q-px-md q-pt-md shadow-3 cursor-pointer"
          @mousedown=" statusIMG[index].state != 'FOUND' ?  currentIMG = index : currentIMG "
          @click="playAudio(require(`../../assets/relationship/${element.audio}`), index) "
          :style="statusIMG[index].style"
        >
          <q-img
          :src="require(`../../assets/relationship/${element.image}`)"
            :ratio="16/9"
            spinner-color="primary"
            spinner-size="82px"
            style="max-height: 30vh;"
          />
          <p class="q-mt-sm">{{ element.word }}</p>
        </div>
      </div>

      <div class="col-8 col-md-10 q-px-md q-py-md flex flex-center">
        <div
          v-ripple
          class="relative-position flex shadow-3 q-px-md q-py-md cursor-pointer"
          style="min-height: 100%; min-width: 100%;"
          @click="toggleMeaning(index)"
          @mousedown=" statusMeaning[index].state != 'FOUND' ? currentMeaning = index : currentMeaning  "
          :style="statusMeaning[index].style"
          >
          <div v-html="significados[index].significado"></div>
        </div>
      </div>
    </div>

    <!-- dialog exitoso -->
     <q-dialog
      v-model="fullWidth"
      :maximized="true"
      persistent
      @hide="onDialogHide"
    >
      <q-card :class="$q.dark.isActive ? 'card-theme--dark':'card-theme--light'">
        <q-card-section class="row" :class="$q.dark.isActive ? 'title-theme--dark':'title-theme--light'">
          <div class="text-h6 col-10 text-white">Resultados</div>
          <q-btn flat icon="close" class="col-2 text-white" v-close-popup/>
        </q-card-section>

        <q-card-section>
          <p class="text-h3 text-center q-mt-lg">Felicidades</p>
          <p class="text-h6 text-center q-py-md">Haz completado las lecturas</p>
          <p class="text-center q-py-md text-bold text-subtitle1"> Tiempo : {{timeUser}} </p>
          <div class="row justify-center">
            <q-img
            class="col-12 col-md-4"
              src="~/assets/read.svg"
              :ratio="16/9"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <br>
          <br>
          <p class="text-center q-py-lg"> Continua aprendiendo, lo haz hecho muy bien </p>
        </q-card-section>
        <q-card-section class="row justify-center">
          <q-btn
            rounded
            v-close-popup
            :class="$q.dark.isActive ? 'button-theme--dark': 'button-theme--light'"
            size="md"
            label="Aceptar"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useThemeStore } from '../../stores/themes'
import { api } from 'boot/axios'
import { Notify, Dark } from 'quasar'

export default defineComponent({
  name: 'strategyRelationship',
  setup () {
    const errorMsg = {
      message: '<b>ERROR: No se puede consultar la información intente más tarde</b>',
      color: 'red',
      icon: 'dangerous',
      html: true
    }

    const buffer = ref('')

    // Selección de grupo temas
    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected || 3

    // Comportamiento reactivos
    const elements = ref([])
    const significados = ref([])

    onMounted(() => {
      const selection = ['AGES', 'TonicaAtona', 'Tritonica']
      // Cargamos los datos para la lectura
      api.get(`strategy-relationship/elements/${selection[groupSelected.value - 1]}`).then(({ data }) => {
        buffer.value = data.data
        elements.value = buffer.value[0].content
        significados.value = elements.value.map(e => ({ uuid: e.uuid, significado: e.significado })).sort(() => Math.random() - 0.5)
      }).catch((e) => {
        console.log('%c ERROR ', 'background: #222; color: #bada55')

        console.log(e)
        Notify.create(errorMsg)
        // router.push({ path: '/themePage' })
      })
    })

    function playAudio (path, index) {
      const audio = ref(new Audio(path))
      audio.value.currentTime = 0
      audio.value.play()
      toggleIMG(index)
    }

    // SELECTION
    const currentMeaning = ref(null)
    const currentIMG = ref(null)
    // NOTA se puede construir en el mounted los OBJECT statuDs, para obtener el numero de llaves
    const statusMeaning = reactive({
      0: { state: 'NONE', style: '' },
      1: { state: 'NONE', style: '' },
      2: { state: 'NONE', style: '' }
    })

    const statusIMG = reactive({
      0: { state: 'NONE', style: '' },
      1: { state: 'NONE', style: '' },
      2: { state: 'NONE', style: '' }
    })

    function toggleMeaning (index) {
      switch (statusMeaning[index].state) {
        case 'NONE':
          statusMeaning[index].style = 'border: 2px solid red;'
          statusMeaning[index].state = 'SELECTED'
          if (currentIMG.value != null) compare()
          else if (currentIMG.value == null) {
            Object.keys(statusMeaning).forEach(e => {
              // eslint-disable-next-line eqeqeq
              if (statusMeaning[e].state != 'FOUND' && currentMeaning.value != e) {
                statusMeaning[e].style = ''
                statusMeaning[e].state = 'NONE'
              }
            })
          }
          break
        case 'SELECTED':
          if (currentIMG.value == null) {
            Object.keys(statusMeaning).forEach(e => {
              // eslint-disable-next-line eqeqeq
              if (statusMeaning[e].state != 'FOUND' && currentMeaning.value == e) {
                statusMeaning[e].style = ''
                statusMeaning[e].state = 'NONE'
                currentMeaning.value = null
              }
            })
          }
          break
        case 'FOUND':
          // statusMeaning[index].style = 'border: 2px solid yellow;'
          console.log('No hace NADA, ENCONTRADO')
          break
      }
    }

    function toggleIMG (index) {
      switch (statusIMG[index].state) {
        case 'NONE':
          statusIMG[index].style = 'border: 2px solid red;'
          statusIMG[index].state = 'SELECTED'
          if (currentMeaning.value != null) compare()
          else if (currentMeaning.value == null) {
            Object.keys(statusIMG).forEach(e => {
              // eslint-disable-next-line eqeqeq
              if (statusIMG[e].state != 'FOUND' && currentIMG.value != e) {
                statusIMG[e].style = ''
                statusIMG[e].state = 'NONE'
              }
            })
          }
          break
        case 'SELECTED':
          if (currentMeaning.value == null) {
            Object.keys(statusIMG).forEach(e => {
              // eslint-disable-next-line eqeqeq
              if (statusIMG[e].state != 'FOUND' && currentIMG.value == e) {
                statusIMG[e].style = ''
                statusIMG[e].state = 'NONE'
                currentIMG.value = null
              }
            })
          }
          break
        case 'FOUND':
          console.log('No hace NADA, ENCONTRADO')
          break
      }
    }

    function compare () {
      const meaningValue = significados.value[currentMeaning.value]?.uuid
      const imgValue = elements.value[currentIMG.value]?.uuid

      // eslint-disable-next-line eqeqeq
      if (imgValue == meaningValue) {
        console.log('%c SON IGUALES ', 'background: #222; color: #bada55')
        // Se colocan estilos
        statusMeaning[currentMeaning.value].style = 'border: 2px solid yellow;'
        statusIMG[currentIMG.value].style = 'border: 2px solid yellow;'
        statusMeaning[currentMeaning.value].state = 'FOUND'
        statusIMG[currentIMG.value].state = 'FOUND'

        Notify.create({
          color: Dark.isActive ? 'indigo' : 'primary',
          html: true,
          position: 'center',
          icon: 'thumb_up',
          timeout: 100
        })
        asserts.value++
        nextExercise()
      }
      // eslint-disable-next-line eqeqeq
      if (imgValue != meaningValue) {
        statusMeaning[currentMeaning.value].style = ''
        statusIMG[currentIMG.value].style = ''
        statusMeaning[currentMeaning.value].state = 'NONE'
        statusIMG[currentIMG.value].state = 'NONE'

        Notify.create({
          color: Dark.isActive ? 'accent' : 'negative',
          html: true,
          position: 'center',
          icon: 'mood_bad',
          timeout: 100
        })
        wrongs.value++
      }
      // Se restauran punteros
      currentMeaning.value = null
      currentIMG.value = null
    }

    // Avance  y finalización del juego
    const asserts = ref(0)
    const wrongs = ref(0)
    const currentExercise = ref(0)
    function nextExercise () {
      console.log(asserts.value, elements.value.length)
      if (asserts.value === elements.value.length) {
        console.log('%c PASAR AL SIGUIENTE ', 'background: #222; color: #bada55')
        asserts.value = 0

        if (currentExercise.value >= buffer.value.length - 1) {
          console.log('%c FINALIZA EL JUEGO ', 'background: #222; color: #bada55')
        } else {
          currentExercise.value++
          // Restaurar todos los elementos al esto inicial
          Object.keys(statusMeaning).forEach(e => {
            statusMeaning[e].style = ''
            statusMeaning[e].state = 'NONE'
          })
          Object.keys(statusIMG).forEach(e => {
            statusIMG[e].style = ''
            statusIMG[e].state = 'NONE'
          })
          // Mostrar los nuevos elementos
          elements.value = buffer.value[currentExercise.value].content
          significados.value = elements.value.map(e => ({ uuid: e.uuid, significado: e.significado })).sort(() => Math.random() - 0.5)
          currentExercise.value = null
          currentIMG.value = null
        }
      }
    }

    return {
      elements,
      playAudio,
      significados,
      // SELECTION
      currentMeaning,
      currentIMG,
      toggleMeaning,
      toggleIMG,
      statusMeaning,
      statusIMG,
      compare
    }
  }
})
</script>
/**
  Tareas para HOY:
  - Mostrar pantalla final
    - Se califica por error
    - También se muestra tiempo en la estrategia
  - Configurar la ruta
  - Configurar estilos finales para la aplicación
 */
