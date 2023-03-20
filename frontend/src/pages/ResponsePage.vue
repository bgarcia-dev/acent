<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-sm-12 col-md-10">
      <div class="row justify-center q-pa-md">
        <p class="text-center col-12">
          Tu palabra ingresada <b><i>{{ word }}</i></b> posiblemente tiene una acentuación de: {{ accentuation }}
        </p>

        <div v-html="theoricalMaterial"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
const { useMyStore } = require('../stores/responseQuery')

export default defineComponent({
  name: 'ResponsePage',
  setup () {
    const response = ref('')
    const myStore = useMyStore()
    const accentuation = ref('')
    const word = ref('')

    const theoricalMaterial = ref('')
    onMounted(() => {
      accentuation.value = myStore.accentuation
      word.value = myStore.word
      theoricalMaterial.value = myStore.myData.TheoreticalMaterial.resource
    })

    return {
      response,
      // Response Api
      theoricalMaterial,
      accentuation,
      word
    }
  }
})

</script>
<style lang="scss" scoped>
.table-EP{
  border-collapse: collapse;
  width: 100%;
  background-color: #000;
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
}
</style>
