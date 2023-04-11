<template>
  <div class="row">
    <div class="q-gutter-y-md col-12">
      <q-card :class="$q.dark.isActive ? 'panel--dark' : 'panel--light'">
        <q-tabs
          v-model="tabSelected"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
          @update:model-value="changeTab"
        >
          <q-tab
            v-for="(tab, index) in tabsRender"
            :key="index"
            :name="tab"
          >
            {{ tab }}
          </q-tab>
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tabSelected" animated :class="$q.dark.isActive ? 'panel--dark' : 'panel--light'">
          <q-tab-panel v-for="(tab, index) in tabsRender" :key="index" :name="tab">
            <div v-html="theoricalMaterial"></div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useThemeStore } from '../stores/themes'

export default defineComponent({
  name: 'TheoreticalMaterialPage',
  setup () {
    const data = ref({})
    const tabSelected = ref('')
    const themeStore = useThemeStore()
    const groups = {
      1: ['Agudas', 'Graves', 'Esdrújulas', 'Sobresdrújulas'],
      2: ['Tónicas', 'Átonas'],
      3: ['Tritónicas']
    }
    const theoricalMaterial = ref('')

    const tabsRender = ref([])
    onMounted(() => {
      if (themeStore.groupSelected == null) return 0
      tabsRender.value = groups[themeStore.groupSelected]
      tabSelected.value = tabsRender.value[0]
      // TODO: hotfix: Solventar el tiempo de espera de otra forma
      setTimeout(() => {
        changeTab(tabsRender.value[0])
      }, 100)
    })

    function changeTab (nameTab) {
      if (nameTab === 'Agudas') { theoricalMaterial.value = themeStore.aguadas.theory }
      if (nameTab === 'Graves') { theoricalMaterial.value = themeStore.graves.theory }
      if (nameTab === 'Esdrújulas') { theoricalMaterial.value = themeStore.esdrujulas.theory }
      if (nameTab === 'Sobresdrújulas') { theoricalMaterial.value = themeStore.sobresdrujulas.theory }
      if (nameTab === 'Tónicas') { theoricalMaterial.value = themeStore.tonicas.theory }
      if (nameTab === 'Átonas') { theoricalMaterial.value = themeStore.atonas.theory }
      if (nameTab === 'Tritónicas') { theoricalMaterial.value = themeStore.tritonicas.theory }
    }

    return {
      tabSelected,
      data,
      tabsRender,
      changeTab,
      theoricalMaterial
    }
  }
})
</script>

<style lang="scss" scoped>
.panel--dark {
  background-color: #3B4058 !important;
}

.panel--light {
  background-color: #F5F5FB !important;
}

</style>
