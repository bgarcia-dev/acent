<template>
  <div class="row">

    <div class="q-gutter-y-md col-12">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'TheoreticalMaterialPage',
  setup () {
    const data = ref({})
    const tab = ref('')

    function ooo () {
      // Retornar los temas para los tabs
      // Retornar INFO temas
      // const x = {
      //   tabs: ['Aguda', 'Grave', 'Esdrújula', 'Sobresdrújula'],
      //   data: {
      //     Aguda: 'Información 1',
      //     Grave: '22222222222222',
      //     Esdrújula: '33333333333333',
      //     Sobresdrújula: '444444444444444'
      //   }
      // }
      console.log('oooooo')
    }

    onMounted(() => {
      ooo()
      console.log('%c Oh my heavens! ', 'background: #222; color: #bada55')
    })

    return {
      tab,
      data
    }
  }
})
</script>
