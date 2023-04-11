<template>
  <q-page>
    <h1>Estrategias o algo</h1>
    <pre>
      {{ groupSelected }}
    </pre>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useThemeStore } from '../stores/themes'

export default defineComponent({
  name: 'StrategiesPage',
  setup () {
    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected

    return {
      groupSelected
    }
  }
})
</script>
