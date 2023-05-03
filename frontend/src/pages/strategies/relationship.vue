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
          :ref="setIMGRef(index)"
          :style="{ border: selectedIMGIndex === index ? '2px solid red' : '2px solid black' }"
          @click="playAudio($event,require(`../../assets/relationship/${element.audio}`), index)"
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
          :ref="setRef(index)"
          :style="{ border: selectedIndex === index ? '2px solid red' : '2px solid black' }"
          @click="selectItem(index)"
        >
          <div v-html="significados[index].significado"></div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
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

    /**
     * TODO:
     * Poner selector
     * cambios de selector
     * evaluar selección
     */

    // Selección de grupo temas
    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected

    // Comportamiento reactivos
    const elements = ref([])
    const significados = ref([])

    onMounted(() => {
      const selection = ['AGES', 'TonicaAtona', 'Tritonica']
      console.log(`%c ${selection[groupSelected.value - 1]} `, 'background: #222; color: #bada55')
      elements.value = buffer
      significados.value = buffer2.sort(() => Math.random() - 0.5)
    })

    function playAudio (event, path, index) {
      const audio = ref(new Audio(path))
      audio.value.currentTime = 0
      audio.value.play()
      selectIMGItem(index)
    }

    // SELECTOR Significados
    const selectedIndex = ref(-1)
    const selectedRef = ref(null)

    function setRef (index) {
      return (el) => {
        if (selectedIndex.value === index) {
          selectedRef.value = el
        }
      }
    }

    function selectItem (index) {
      if (selectedIndex.value !== index) {
        if (selectedRef.value) {
          selectedRef?.value?.setAttribute('style', 'border: 2px solid black')
        }
        selectedIndex.value = index
        selectedRef.value = document.querySelector(`[ref="item-${index}"]`)
        selectedRef?.value?.setAttribute('style', 'border: 2px solid red')
      }
      compareSelection()
    }

    // SELECTOR IMAGES
    const selectedIMGIndex = ref(-1)
    const selectedIMGRef = ref(null)

    function setIMGRef (index) {
      return (el) => {
        if (selectedIndex.value === index) {
          selectedIMGRef.value = el
        }
      }
    }

    function selectIMGItem (index) {
      if (selectedIMGIndex.value !== index) {
        if (selectedIMGRef.value) {
          selectedIMGRef?.value?.setAttribute('style', 'border: 2px solid black')
        }
        selectedIMGIndex.value = index
        selectedIMGRef.value = document.querySelector(`[ref="item-${index}"]`)
        selectedIMGRef?.value?.setAttribute('style', 'border: 2px solid red')
      }

      compareSelection()
    }

    function compareSelection () {
      const imageSelected = elements.value[selectedIMGIndex.value]?.uuid
      const meaningSelected = significados.value[selectedIndex.value]?.uuid
      if (imageSelected === meaningSelected) {
        console.log('%c SON IGUALES ', 'background: #222; color: #bada55')
      }
    }

    return {
      elements,
      playAudio,
      significados,
      setRef,
      selectItem,
      selectedIndex,
      selectedRef,
      selectedIMGIndex,
      selectedIMGRef,
      setIMGRef,
      selectIMGItem,
      compareSelection
    }
  }
})
</script>

<style lang="scss" scoped>
.container-meaning{
  cursor: pointer;
}

</style>
