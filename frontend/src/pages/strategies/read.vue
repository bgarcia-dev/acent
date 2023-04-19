<template>
  <q-page>
    <div class="row col-12">
      <p class="col-12 text-center q-mb-md" style="font-size: 18px;">
        <i>Selecciona las palabras mal escritas antes que el tiempo se agote</i>
      </p>

    </div>
    <div class="row justify-center">
      <q-img
        class="col-xs-12 col-md-4"
        :src="require(`../../assets/${image}`)"
        :ratio="4/3"
        spinner-color="primary"
        spinner-size="82px"
        />
      <p class="col-12 text-center q-mt-md"> {{ cantidadPalabrasEncontradas  }} / {{ cantidadTotalDePalabras }}</p>
    </div>
    <div class="row col-12 q-px-md q-pt-sm" wrap>
      <p class="text-justify" style="font-size: 21px;">
        <span
        v-for="element in valores"
        :key="element.uuid"
        @click="checkWord($event,element)"
        >
        {{ element.text }}
      </span>
      </p>
    </div>
    <div class="row col-12 justify-center q-mt-lg">
      <app-timer @timeout="handlerEvent"/>
    </div>

    <!-- dialog exitoso -->
    <q-dialog
      v-model="fullWidth"
      :maximized="true"
      persistent
      @hide="onDialogHide"
    >
      <q-card :class="$q.dark.isActive ? 'card-theme--dark':'card-theme--light'">
        <q-card-section class="row" :class="$q.dark.isActive ? 'title-theme--dark':'title-theme--light'">
          <div class="text-h6 col-10 text-white">Resultados</div>
          <q-btn flat icon="close" class="col-2 text-white" v-close-popup/>
        </q-card-section>

        <q-card-section>
          <p class="text-h3 text-center q-mt-lg">Felicidades</p>
          <p class="text-h6 text-center q-py-md">Haz completado las lecturas</p>
          <p class="text-center q-py-md text-bold text-subtitle1"> Tiempo : {{timeUser}} </p>
          <div class="row justify-center">
            <q-img
            class="col-12 col-md-4"
              src="~/assets/read.svg"
              :ratio="16/9"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <br>
          <br>
          <p class="text-center q-py-lg"> Continua aprendiendo, lo haz hecho muy bien </p>
        </q-card-section>
        <q-card-section class="row justify-center">
          <q-btn
            rounded
            v-close-popup
            :class="$q.dark.isActive ? 'button-theme--dark': 'button-theme--light'"
            size="md"
            label="Aceptar"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- dialog timeout -->
    <q-dialog
      v-model="dialogTimeout"
      :maximized="true"
      persistent
      @hide="onDialogHide"
    >
      <q-card :class="$q.dark.isActive ? 'card-theme--dark':'card-theme--light'">
        <q-card-section class="row" :class="$q.dark.isActive ? 'title-theme--dark':'title-theme--light'">
          <div class="text-h6 col-10 text-white">Resultados</div>
          <q-btn flat icon="close" class="col-2 text-white" v-close-popup/>
        </q-card-section>

        <q-card-section>
          <p class="text-h3 text-center q-mt-lg">Se acabo el tiempo</p>
          <p class="text-h6 text-center q-py-md">Vuelve a intentarlo estas más cerca de lograrlo</p>
          <div class="row justify-center">
            <q-img
            class="col-12 col-md-4"
              src="~/assets/timeout.svg"
              :ratio="16/9"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <br>
          <br>
          <p class="text-center q-py-lg"> Continua aprendiendo, nunca dejes de aprender </p>
        </q-card-section>
        <q-card-section class="row justify-center">
          <q-btn
            rounded
            v-close-popup
            :class="$q.dark.isActive ? 'button-theme--dark': 'button-theme--light'"
            size="md"
            label="Aceptar"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useThemeStore } from '../../stores/themes'
import { Notify, Dark } from 'quasar'
import Timer from '../../components/Timer.vue'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'StrategyRead',
  components: {
    appTimer: Timer
  },
  setup () {
    const errorMsg = {
      message: '<b>ERROR: No se puede consultar la información intente más tarde</b>',
      color: 'red',
      icon: 'dangerous',
      html: true
    }

    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected

    const buffer = ref('')
    const valores = ref('')
    const cantidadTotalDePalabras = ref(5)
    const cantidadPalabrasEncontradas = ref(0)
    const image = ref('img01.png')
    const numberExcersice = ref(1)
    const fullWidth = ref(false)
    const dialogTimeout = ref(false)

    const startTime = ref(null)
    const endTime = ref(null)
    const timeUser = ref(null)

    function checkWord (event, element) {
      if (element.status === false && element.isEvaluable) {
        const elementoHTML = event.target
        elementoHTML.classList.add('text-green')
        element.status = true
        element.text = element.correctValue
        cantidadPalabrasEncontradas.value++

        Notify.create({
          message: `<b>Palabra ${element.accentuation}</b>`,
          color: Dark.isActive ? 'indigo' : 'primary',
          html: true,
          timeout: 300,
          position: 'bottom-left',
          icon: 'thumb_up'
        })

        const sizeExercises = buffer.value.length
        if (cantidadPalabrasEncontradas.value === cantidadTotalDePalabras.value) {
          if (numberExcersice.value !== sizeExercises) {
            valores.value = buffer.value[numberExcersice.value].content
            image.value = buffer.value[numberExcersice.value].image_path
            cantidadTotalDePalabras.value = buffer.value[numberExcersice.value].total_words
            cantidadPalabrasEncontradas.value = 0
            numberExcersice.value++
            // Mensaje de progreso exitoso
            Notify.create({
              color: Dark.isActive ? 'indigo' : 'primary',
              html: true,
              position: 'center',
              icon: 'thumb_up',
              timeout: 100
            })
          }
          if (numberExcersice.value === sizeExercises && cantidadPalabrasEncontradas.value === cantidadTotalDePalabras.value) {
            console.log('COMPLETE GAME')
            fullWidth.value = true
            endTime.value = Date.now()
            const elapsed = Math.floor((endTime.value - startTime.value) / 1000)
            timeUser.value = `${Math.floor(elapsed / 60)} : ${(elapsed % 60).toString().padStart(2, '0')}`
          }
        }
      }
    }

    function handlerEvent () {
      dialogTimeout.value = true
    }

    onMounted(() => {
      const selection = ['AGES', 'TonicaAtona', 'Tritonica']
      // Cargamos los datos para la lectura
      api.get(`strategy-read/elements/${selection[groupSelected.value - 1]}`).then(({ data }) => {
        buffer.value = data.data
        valores.value = buffer.value[0].content
        cantidadTotalDePalabras.value = buffer.value[0].total_words
        image.value = buffer.value[0].image_path
      }).catch(() => {
        Notify.create(errorMsg)
      })
      // Iniciamos contador de tiempo del usuario
      startTime.value = Date.now()
    })

    const router = useRouter()
    const onDialogHide = () => {
      router.push({ path: '/menuStrategiesPage' })
    }

    return {
      groupSelected,
      checkWord,
      valores,
      cantidadTotalDePalabras,
      cantidadPalabrasEncontradas,
      handlerEvent,
      image,
      fullWidth,
      timeUser,
      onDialogHide,
      dialogTimeout
    }
  }
})
</script>

<style lang="scss" scoped>
.title-theme--dark {
  background-color: #150831 !important;
}
.title-theme--light {
  background-color:$primary;
}
.card-theme--dark{
  background-color: #3C3C58;
}

.card-theme--light{
  background-color: #F6F4FB;
}

.button-theme--dark{
  background-color: #6B6A80;
  color: white;
}

.button-theme--light {
  background-color:$primary;
  color: white;
}

</style>
