<template>
  <q-page>
    <div class="row col-12">
      <p class="col-12 text-h6 text-center q-mb-md q-mt-sm">
        Asocia la palabra con su significado
      </p>
    </div>

    <div class="row col-12" v-for="element in elements" :key="element.uuid" >

      <div class="col-4 col-md-2 q-px-md q-py-md" @click="playAudio($event,require(`../../assets/relationship/${element.audio}`))">
        <div
          v-ripple
          class="relative-position flex flex-center q-px-md q-pt-md shadow-3 cursor-pointer"
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
        >
          <div v-html="element.significado"></div>
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

    onMounted(() => {
      const selection = ['AGES', 'TonicaAtona', 'Tritonica']
      console.log(`%c ${selection[groupSelected.value - 1]} `, 'background: #222; color: #bada55')
      // console.log(buffer)
      elements.value = buffer
    })

    function playAudio (event, path) {
      const audio = ref(new Audio(path))
      audio.value.currentTime = 0
      audio.value.play()
    }

    return {
      elements,
      playAudio
    }
  }
})
</script>

<style lang="scss" scoped>
.container-meaning{
  cursor: pointer;
}

</style>
