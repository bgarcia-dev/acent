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

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useThemeStore } from '../../stores/themes'

export default defineComponent({
  name: 'strategyRelationship',
  setup () {
    const buffer = [{
      uuid: '1',
      word: 'Género',
      acentuacion: 'esdrújula',
      image: 'género.jpg',
      audio: 'género.mp3',
      significado: '<p style="font-size:16px">Cuenta con una acepción que da cuenta de la clase a la que pertenece una cosa o un individuo. <br/><br/> Se refiere a una descripción de lo que es algo o alguien.</p> <small> <i>Acentuación :  Esdrújula<i> </small>'
    },
    {
      uuid: '2',
      word: 'Genero',
      acentuacion: 'grave',
      image: 'genero.jpg',
      audio: 'genero.mp3',
      significado: '<p style="font-size:16px">Corresponde a una conjugación del verbo transitivo <i>“Generar”</i> hecha en primera persona del presente indicativo. <br/><br/> Estoy hablando de algo que estoy haciendo ahora mismo.</p> <small> <i>Acentuación :  Grave<i> </small>'
    },
    {
      uuid: '3',
      word: 'Generó',
      acentuacion: 'aguda',
      image: 'generó.jpg',
      audio: 'generó.mp3',
      significado: '<p style="font-size:16px"> Constituye también una conjugación del verbo transitivo <i>“generar”</i> hecha en tercera persona del singular correspondiente al pretérito perfecto simple del modo indicativo. <br/><br/> Es una acción que hizo alguien en el pasado.</p> <small> <i>Acentuación :  Aguda<i> </small>'
    }

    ]

    const buffer2 = [{
      uuid: '1',
      significado: '<p style="font-size:16px">Cuenta con una acepción que da cuenta de la clase a la que pertenece una cosa o un individuo. <br/><br/> Se refiere a una descripción de lo que es algo o alguien.</p> <small> <i>Acentuación :  Esdrújula<i> </small>'

    }, {
      uuid: '2',
      significado: '<p style="font-size:16px">Corresponde a una conjugación del verbo transitivo <i>“Generar”</i> hecha en primera persona del presente indicativo. <br/><br/> Estoy hablando de algo que estoy haciendo ahora mismo.</p> <small> <i>Acentuación :  Grave<i> </small>'
    }, {
      uuid: '3',
      significado: '<p style="font-size:16px"> Constituye también una conjugación del verbo transitivo <i>“generar”</i> hecha en tercera persona del singular correspondiente al pretérito perfecto simple del modo indicativo. <br/><br/> Es una acción que hizo alguien en el pasado.</p> <small> <i>Acentuación :  Aguda<i> </small>'
    }]

    // Selección de grupo temas
    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected

    // Comportamiento reactivos
    const elements = ref([])
    const significados = ref([])

    onMounted(() => {
      // const selection = ['AGES', 'TonicaAtona', 'Tritonica']
      // console.log(`%c ${selection[groupSelected.value - 1]} `, 'background: #222; color: #bada55')
      elements.value = buffer
      significados.value = buffer2.sort(() => Math.random() - 0.5)
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
    // NOTA se puede construir en el mounted los OBJECT status, para obtener el numero de llaves
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
      console.log('%c NO OSE DE DEBE LLAMAR ', 'background: #222; color: #bada55')

      const meaningValue = significados.value[currentMeaning.value]?.uuid
      const imgValue = elements.value[currentIMG.value]?.uuid

      // eslint-disable-next-line eqeqeq
      if (imgValue == meaningValue) {
        console.log('%c SON IGUALES ', 'background: #222; color: #bada55')
        // TODO: MANDAR ICONOGRAFIA DE QUE SE RESOLVIO BIEN
        // Se colocan estilos
        statusMeaning[currentMeaning.value].style = 'border: 2px solid yellow;'
        statusIMG[currentIMG.value].style = 'border: 2px solid yellow;'
        statusMeaning[currentMeaning.value].state = 'FOUND'
        statusIMG[currentIMG.value].state = 'FOUND'
      }
      // eslint-disable-next-line eqeqeq
      if (imgValue != meaningValue) {
        console.log('%c SON DIFERENTES ', 'background: #222; color: #FF0000')
        // TODO: MANDAR ICONOGRAFIA DE QUE SE RESOLVIO MAL
        statusMeaning[currentMeaning.value].style = ''
        statusIMG[currentIMG.value].style = ''
        statusMeaning[currentMeaning.value].state = 'NONE'
        statusIMG[currentIMG.value].state = 'NONE'
      }
      // Se restauran punteros
      currentMeaning.value = null
      currentIMG.value = null
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
  - Conectar el backend con el front
    - Crear data set mínimo de prueba
    - Configurar un mínimo de 3 ejercicios
  - Mostrar pantalla final
    - Se califica por error
    - También se muestra tiempo en la estrategia
  - Configurar la ruta
 */
