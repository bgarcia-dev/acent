<template>
  <q-page>
    <d1iv class="row col-12">
      <div class="col-3" v-for="(element,index) in elements" :key="element.uuid">
        <div
          v-ripple
          class="relative-position flex flex-center q-px-md q-pt-md cursor-pointer"
        >
        <!-- :src="require(`../assets/${element.image}`)" -->
        <q-img
            :src="require(`../assets/relationship/${element.image}`)"
            :ratio="4/3"
            spinner-color="primary"
            spinner-size="82px"
            @click="playAudio(require(`../assets/relationship/${element.audio}`), index) "
          />
          <p class="q-mt-sm">{{ element.word }}</p>
        </div>
      </div>
    </d1iv>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'TestPage',
  setup () {
    const elements = ref([])
    onMounted(() => {
      // const selection = ['AGES', 'TonicaAtona', 'Tritonica']
      // ------------------- RELATIONSHIP -------------------------------------
      api.get('strategy-relationship/test/elements/Tritonica').then(({ data }) => {
        const buffer = data.data.map(e => (e.content)).flat()
        elements.value = buffer
      }).catch((e) => {
        console.log('=================================')
        console.log(e)
      })

      // ------------------- READ -------------------------------------
      // api.get('strategy-read/test/elements/AGES').then(({ data }) => {
      //   const buffer = data.data
      //   elements.value = buffer.map(e => ({ image: e.image_path, uuid: e.id })).flat()
      // }).catch((e) => {
      //   console.log('=================================')
      //   console.log(e)
      // })
    })

    function playAudio (path, index) {
      const audio = ref(new Audio(path))
      audio.value.currentTime = 0
      audio.value.play()
      console.log(index)
    }
    return {
      playAudio,
      elements
    }
  }
})
</script>
