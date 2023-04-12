<template>
  <q-page>
    <div class="row col-12">
      <p class="col-12 text-center q-mb-md" style="font-size: 18px;">
        <i>Selecciona las palabras mal escritas antes que el tiempo se agote</i>
      </p>
      <p class="col-12 text-center"> {{ cantidadPalabrasEncontradas  }} / {{ cantidadTotalDePalabras }}</p>
    </div>
    <div class="row justify-center">
      <q-img
        class="col-xs-12 col-md-4"
        src="~/assets/img01.png"
        :ratio="16/9"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>
    <div class="row col-12 q-px-md q-pt-md" wrap>
      <p class="text-justify" style="font-size: 21px;">
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
import { Notify } from 'quasar'

export default defineComponent({
  name: 'StrategyRead',
  setup () {
    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected

    const lectura = ref('')
    const valores = ref('')
    const cantidadTotalDePalabras = ref(5)
    const cantidadPalabrasEncontradas = ref(0)
    valores.value = [
      {
        uuid: '3747b270-764f-4b49-b5a3-6ab6e0e0ee5c',
        correctValue: 'En ',
        text: 'En ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'feabbc75-6d3e-46f0-a030-e9fa43c146cf',
        correctValue: 'el ',
        text: 'el ',
        isEvaluable: true,
        status: false
      },
      {
        uuid: '45a92d51-fd31-49cd-8174-c5ef6e635924',
        correctValue: 'bosque ',
        text: 'bosque ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'f2a2ab58-afcc-45dc-892f-328ccd76f88d',
        correctValue: 'frondoso, ',
        text: 'frondoso, ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '8838b98c-1721-4d6a-bd2a-bd3cbb0b9b38',
        correctValue: 'un ',
        text: 'un ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'b20002af-0de9-4f96-b842-f8eebf6ab0df',
        correctValue: 'zorro ',
        text: 'zorro ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '52af2327-5341-46a4-bc00-783e6bdc64a1',
        correctValue: 'astuto ',
        text: 'astuto ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'f3235e29-be23-4599-bc4d-c83c7ce4d422',
        correctValue: 'cazaba ',
        text: 'cazaba ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '7cd060f9-d745-4893-a19a-6b0cb1521e77',
        correctValue: 'mariposas ',
        text: 'mariposas ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'b67ead22-7be2-4634-a2ad-f5b4181dc9ed',
        correctValue: 'coloridas ',
        text: 'coloridas ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '0187d1e9-efd8-4a41-8d21-0ef24fb6aa77',
        correctValue: 'para ',
        text: 'para ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '530f3cb0-010a-4b5f-8983-0b337a39f301',
        correctValue: 'su ',
        text: 'su ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '3a2c2cca-710b-437b-997b-aa44df089007',
        correctValue: 'cena. ',
        text: 'cena. ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '4f32bbea-22d5-40b5-904b-7ea23542fcf0',
        correctValue: 'De ',
        text: 'De ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '0df78a88-ae55-4cce-a0fd-846e438f45c7',
        correctValue: 'repente, ',
        text: 'repente, ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '14664284-ec25-4eec-b0c9-1fb37342ec82',
        correctValue: 'escuchó ',
        text: 'escucho ',
        isEvaluable: true,
        status: false,
        accentuation: 'aguda'
      },
      {
        uuid: '4e0aca99-cf12-412d-b30a-4cbcadb73a74',
        correctValue: 'un ',
        text: 'un ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'e803b9cc-7226-4142-ad37-470128b3eb42',
        correctValue: 'ruido ',
        text: 'ruido ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '8abad53a-9ad2-46c4-b30c-66ff17d819ed',
        correctValue: 'y ',
        text: 'y ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'f69553ac-8c30-4bd7-bb3a-f1873ab62404',
        correctValue: 'vio ',
        text: 'vio ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '6d4bfb15-36fe-40a5-a567-ba45aa810be7',
        correctValue: 'a ',
        text: 'a ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '5c6a54e7-8f16-4d5e-a942-4db093e78064',
        correctValue: 'un ',
        text: 'un ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '08070b75-1835-4cb8-915c-468f723d8e07',
        correctValue: 'búho ',
        text: 'búho ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '72d4695d-b125-4558-ae47-29b08507ac94',
        correctValue: 'solitario ',
        text: 'solitario ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '7d4f0171-2316-4919-a825-5974ff8e04b3',
        correctValue: 'posado ',
        text: 'posado ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '59c7abca-fbd4-49b8-85d4-bbf8bbcd20db',
        correctValue: 'en ',
        text: 'en ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'a2420661-ad25-4854-a898-618b92fdcfcc',
        correctValue: 'una ',
        text: 'una ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '63b7f7cc-f750-490b-afa8-52d0cb561360',
        correctValue: 'rama ',
        text: 'rama ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'cd29c9fc-c991-45d6-8f2e-8be81173008b',
        correctValue: 'cercana. ',
        text: 'cercana. ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '5f97143d-4ae0-49ee-89ef-6829549a81bf',
        correctValue: 'El ',
        text: 'El ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '5d1906e2-f99e-4b42-9464-d43c202bcaa1',
        correctValue: 'zorro, ',
        text: 'zorro, ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'd246090a-45e2-4a3b-93d0-e5881e735a06',
        correctValue: 'con ',
        text: 'con ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '85163da6-b46b-429f-a192-c26af9871216',
        correctValue: 'su ',
        text: 'su ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'cf25971c-6ec8-4054-b58b-e5e7f6f8a747',
        correctValue: 'agilidad, ',
        text: 'agilidad, ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'b97caa4a-6fcb-431e-b7ad-c0aa84340c12',
        correctValue: 'saltó ',
        text: 'salto ',
        isEvaluable: true,
        status: false,
        accentuation: 'aguda'
      },
      {
        uuid: 'ec2b50a9-bd5f-408d-89e4-f3bd55ff4d1f',
        correctValue: 'y ',
        text: 'y ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'f47e30cb-c483-42a7-9bc2-9921bf04c8a3',
        correctValue: 'trató ',
        text: 'trato ',
        isEvaluable: true,
        status: false,
        accentuation: 'aguda'
      },
      {
        uuid: 'd5e96a85-e10f-40fa-9fa0-c6e820e66515',
        correctValue: 'de ',
        text: 'de ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '4c969b37-c9e2-4a47-86a8-d6b9b7d04794',
        correctValue: 'atrapar ',
        text: 'atrapar ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'b94c7e9f-ea4d-42fb-8bcb-1812f92bbed9',
        correctValue: 'al ',
        text: 'al ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'e0581a97-a5f2-405c-8dae-d2b532403e82',
        correctValue: 'búho, ',
        text: 'búho, ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '588e2ed8-0011-4c89-92a8-d800e61dbf81',
        correctValue: 'pero ',
        text: 'pero ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'd8571b64-4158-426c-a508-afd0dbc00e81',
        correctValue: 'este, ',
        text: 'este, ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '06f55fd3-6882-4e5d-8272-517c77d437f8',
        correctValue: 'con ',
        text: 'con ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'ca23992d-68ef-476d-9656-602ef04cdeb2',
        correctValue: 'sus ',
        text: 'sus ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'f37f47c3-53fe-4292-bb00-1996f134fa41',
        correctValue: 'ojos ',
        text: 'ojos ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '75d9319e-4f88-4e0f-9812-3b94afa13c2a',
        correctValue: 'agudos, ',
        text: 'agudos, ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '9777392d-038c-4e65-a3ca-410fb0a28c3c',
        correctValue: 'lo ',
        text: 'lo ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: 'fd24f37c-099b-4fb0-a4df-a725cd8f9e28',
        correctValue: 'esquivó ',
        text: 'esquivo ',
        isEvaluable: true,
        status: false,
        accentuation: 'aguda'
      },
      {
        uuid: '07e054aa-cb92-434b-b656-6a055214af58',
        correctValue: 'y ',
        text: 'y ',
        isEvaluable: false,
        status: false
      },
      {
        uuid: '68d8a034-4660-4ced-bd17-0480b89febad',
        correctValue: 'voló ',
        text: 'volo ',
        isEvaluable: true,
        status: false,
        accentuation: 'aguda'
      },
      {
        uuid: 'ed471839-5b7d-49a6-8b54-edee2d88afc6',
        correctValue: 'lejos.',
        text: 'lejos.',
        isEvaluable: false,
        status: false
      }
    ]

    function meth (event, element) {
      if (element.status === false && element.isEvaluable) {
        const elementoHTML = event.target
        elementoHTML.classList.add('text-green')
        element.status = true
        element.text = element.correctValue
        cantidadPalabrasEncontradas.value++

        Notify.create({
          message: `<b>Palabra ${element.accentuation}</b>`,
          color: 'indigo',
          html: true,
          timeout: 300,
          position: 'bottom-left',
          icon: 'thumb_up'
        })

        if (cantidadPalabrasEncontradas.value === cantidadTotalDePalabras.value) {
          Notify.create({
            message: '<b>TODO:NEXT PAGE</b>',
            color: 'danger',
            html: true,
            position: 'center'
          })
        }
      }
    }

    return {
      groupSelected,
      lectura,
      meth,
      valores,
      cantidadTotalDePalabras,
      cantidadPalabrasEncontradas
    }
  }
})
</script>
