<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-sm-12 col-md-10">
      <div class="row justify-center q-pa-md">
        <q-input
          :color="$q.dark.isActive ? 'white':'black'"
          filled
          v-model="text"
          label="Ingresa palabra a consultar"
          class="col-10 q-my-lg"
          :rules="[validateWord]"
          @keydown.enter.prevent="simulateProgress"
        >
          <template v-slot:prepend>
            <Icon
              icon="teenyicons:search-circle-outline"
              :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
              width="32"
              height="32"
            />
          </template>
        </q-input>
      </div>

      <div class="row justify-center">
        <q-btn
          :loading="loading"
          :color="$q.dark.isActive ? '#f7f7f7':'primary'"
          @click="simulateProgress"
          class="col-8 q-pa-sm"
          >
          <span class="text-weight-bold">Buscar</span>
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            <span class="text-weight-bold">Cargando...</span>
          </template>
        </q-btn>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { silabaJS } from '../utils/silabas.js'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router'
const { useMyStore } = require('../stores/responseQuery')

export default defineComponent({
  name: 'MakeQueryPage',
  components: {
    Icon
  },
  setup () {
    const text = ref('')
    const loading = ref(false)
    const progress = ref(false)

    // Change to page
    const router = useRouter()
    // TODO:
    // - Cambiar Axios que apunte al EP real del backend
    // - El tipo de acentuación debe definir el filter del endpoint la consulta no se debe de hacer dentro de la petición
    function simulateProgress () {
      if (text.value === '') return false
      loading.value = true
      // api.get('https://jsonplaceholder.typicode.com/todos/1')
      api.get('http://localhost:3001/v1/theoretical-material/1')
        .then(({ data }) => {
          console.log('response', data.data)
          console.log(silabaJS.getSilabas(text.value))

          console.log(silabaJS.getSilabas('Árbol'))
          console.log(silabaJS.getSilabas('Mármol'))
          console.log(silabaJS.getSilabas('Cuándo'))
          console.log(silabaJS.getSilabas('Cuánto'))

          console.log(silabaJS.getSilabas('Cómo'))
          console.log(silabaJS.getSilabas('Dónde'))
          console.log(silabaJS.getSilabas('Útil'))
          console.log(silabaJS.getSilabas('Jiménez'))

          console.log(silabaJS.getSilabas('Césped'))
          console.log(silabaJS.getSilabas('Ámbar'))
          console.log(silabaJS.getSilabas('Ángel'))
          console.log(silabaJS.getSilabas('Cristóbal'))

          // Almacena respuesta del endpoint
          const myStore = useMyStore()
          myStore.setMyData(data.data)
          // Direccionamiento
          router.push({ path: '/response' })
        })
        .catch((error) => {
          console.log(error)
        }).finally(() => {
          loading.value = false
        })
    }

    function validateWord (value) {
      const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+$/
      if (value === '') return true
      return regex.test(value) || 'Solo se permiten letras'
    }

    return {
      text,
      loading,
      progress,
      simulateProgress,
      validateWord
    }
  }
})
</script>
