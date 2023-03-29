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
          @keydown.enter.prevent="makeWordQuery"
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
          @click="makeWordQuery"
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
import { Notify } from 'quasar'
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
    function makeWordQuery () {
      if (text.value === '') return false
      loading.value = true
      const { accentuation } = silabaJS.getSilabas(text.value)
      api.get(`theoretical-material/get-theme-by-accentuation/${accentuation}`)
        .then(({ data }) => {
          // Almacena respuesta del endpoint
          const myStore = useMyStore()
          myStore.setMyData(data.data)
          myStore.setAccentuation(accentuation)
          myStore.setWord(text.value)
          // Direccionamiento
          router.push({ path: '/response' })
        })
        .catch(() => {
          Notify.create({
            message: '<b>ERROR: No se puede procesar la información intente más tarde</b>',
            color: 'red',
            icon: 'dangerous',
            html: true
          })
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
      makeWordQuery,
      validateWord
    }
  }
})
</script>
