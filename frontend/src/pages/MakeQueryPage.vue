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
          @click="simulateProgress(3)"
          class="col-8 q-pa-sm"
          >
          <span class="text-weight-bold">Buscar</span>
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            <span class="text-weight-bold">Cargando...</span>
          </template>
        </q-btn>
      </div>

      <div class="row justify-center q-pa-md">
        <pre>
          {{  text  }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'MakeQueryPage',
  components: {
    Icon
  },
  setup () {
    const text = ref('')
    const loading = ref(false)
    const progress = ref(false)
    // Se agrega ejemplo Axios
    function simulateProgress (number) {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 1000 * number)

      api.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return {
      text,
      loading,
      progress,
      simulateProgress
    }
  }
})
</script>
