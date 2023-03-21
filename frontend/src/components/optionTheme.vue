<template>
  <div
    class="col-12 inline row q-pa-sm option-theme justify-between"
    :class="$q.dark.isActive ? 'option-theme--dark' : 'option-theme--light'"
  >
    <div class="col-2 col-md-1 row justify-center" >
      <Icon
        class="self-center"
        :icon="icon"
        :color="$q.dark.isActive ? '#cfcece':'#494750'"
        width="48"
        height="48"
      />
    </div>
    <div class="col-8 col-md-10 justify-center self-center">
      <p class="inline text-center text-weight-bolder text-body1 top paragraph">
        {{  textTop  }}
      </p>
      <p class="inline text-center text-weight-bold bottom paragraph">
        {{  textBottom  }}
      </p>
    </div>
    <div class="col-2 col-md-1">
      <div class="row justify-center" :class="$q.screen.width < 576? 'q-mb-sm':''">
        <q-btn
        flat
        >
          <Icon
            class="self-center"
            icon="material-symbols:play-circle-outline-rounded"
            :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
            :width="$q.screen.lt.sm > 576? 32 : 48"
            :height="$q.screen.width > 576? 32 : 48"
          />
        </q-btn>
      </div>
      <div class="row justify-center">
        <q-btn
          flat
          @click="executeCallback"
        >
          <Icon
            class="self-center"
            icon="material-symbols:menu-book-outline-rounded"
            :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
            :width="$q.screen.width > 576? 32 : 48"
            :height="$q.screen.width > 576? 32 : 48"
          />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { api } from 'boot/axios'
import { Notify } from 'quasar'

import { useThemeStore } from '../stores/themes'

export default defineComponent({
  name: 'optionTheme',
  props: ['icon', 'textTop', 'textBottom', 'callback'],
  components: {
    Icon
  },
  setup (props) {
    const router = useRouter()
    const errorMsg = {
      message: '<b>ERROR: No se puede consultar la información intente más tarde</b>',
      color: 'red',
      icon: 'dangerous',
      html: true
    }
    const themeStore = useThemeStore()
    const groupSelected = ref('')

    function makeRequest (url) {
      // Se comprueba si ya existen los temas en caso de existir ya no se hace llamado al endpoint
      const {
        aguadas,
        graves,
        esdrujulas,
        sobresdrujulas,
        atonas,
        tonicas,
        tritonicas
      } = themeStore

      if (
        groupSelected.value === 1 &&
        ![aguadas, graves, sobresdrujulas, esdrujulas].includes(null)
      ) return null
      if (groupSelected.value === 2 && ![atonas, tonicas].includes(null)) return null
      if (groupSelected.value === 3 && ![tritonicas].includes(null)) return null
      api.get(url)
        .then(({ data }) => {
          data.data.forEach(element => {
            // Grupo 1
            if (element.name === 'Agudas') {
              themeStore.setAgudas({
                name: element.name,
                theory: element.TheoreticalMaterial.resource
              })
            }
            if (element.name === 'Graves') {
              themeStore.setGraves({
                name: element.name,
                theory: element.TheoreticalMaterial.resource
              })
            }
            if (element.name === 'Esdrújulas') {
              themeStore.setEsdrujulas({
                name: element.name,
                theory: element.TheoreticalMaterial.resource
              })
            }
            if (element.name === 'Sobresdrújulas') {
              themeStore.setSobresdrujulas({
                name: element.name,
                theory: element.TheoreticalMaterial.resource
              })
            }
            // Grupo 2
            if (element.name === 'Tónicas') {
              themeStore.setTonicas({
                name: element.name,
                theory: element.TheoreticalMaterial.resource
              })
            }
            if (element.name === 'Átonas') {
              themeStore.setAtonas({
                name: element.name,
                theory: element.TheoreticalMaterial.resource
              })
            }
            // Grupo 3
            if (element.name === 'Tritónicas') {
              themeStore.setTritonicas({
                name: element.name,
                theory: element.TheoreticalMaterial.resource
              })
            }
          })
        })
        .catch((error) => {
          console.log(error)
          Notify.create(errorMsg)
        })
    }

    const methods = {
      ages: () => {
        makeRequest(`theoretical-material/get-themes/${1}`)
        themeStore.setGroupSeleted(1)
        groupSelected.value = 1
      },
      tonicaAtona: () => {
        makeRequest(`theoretical-material/get-themes/${2}`)
        themeStore.setGroupSeleted(2)
        groupSelected.value = 2
      },
      tritonica: () => {
        makeRequest(`theoretical-material/get-themes/${3}`)
        themeStore.setGroupSeleted(3)
        groupSelected.value = 3
      }
    }

    // En click del botón material Teórico
    function executeCallback () {
      methods[props.callback]()
      router.push({ path: '/theoreticalMaterialPage' })
    }

    return {
      executeCallback
    }
  }
})
</script>

<style lang="scss" scoped>
.option-theme {
  border-radius: 10px;
}

.option-theme--dark {
  background-color: #6A6D80 !important;
  .top{
    color: #f7f7f7;
  }
  .bottom{
    color: #cfcece;
  }
}

.option-theme--light {
  background-color: #b6b5b5 !important;
  .top{
    color: #151635;
  }
  .bottom{
    color: #5b5c48;
  }
}

.paragraph {
  padding: 0;
  margin: 0;
}

</style>
