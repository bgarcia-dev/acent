<template>
  <q-page>
    <h1>Estrategias lectura</h1>
    <pre>
      {{ groupSelected }}
    </pre>
    <div class="row col-12" wrap>
      <p>
        <span
        v-for="element in valores"
        :key="element.uuid"
        @click="meth($event,element)"
        >
        {{ element.text }}
      </span>
      </p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useThemeStore } from '../../stores/themes'

export default defineComponent({
  name: 'StrategyRead',
  setup () {
    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected

    const lectura = ref('')
    const valores = ref('')

    lectura.value = '<span @click="meth(`jjj`)">Lectura</span>'
    valores.value = [
      {
        uuid: 'Ujsom198231',
        correctValue: 'En',
        text: 'En ',
        isEvaluable: false,
        status: false

      },
      {
        uuid: 'Ujsom198KLO',
        correctValue: 'cambio',
        text: 'Mal Escrito ',
        isEvaluable: true,
        status: false

      },
      {
        uuid: 'Ujsom1982997',
        correctValue: 'otra ',
        text: 'otra',
        isEvaluable: false,
        status: false

      }
    ]

    function meth (event, element) {
      console.log(element.uuid)
      // Obtenemos el elemento span que se clickeó
      const elemento = event.target

      // Añadimos la clase CSS
      elemento.classList.add('text-red')
    }

    return {
      groupSelected,
      lectura,
      meth,
      valores
    }
  }
})
</script>
