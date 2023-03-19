<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-sm-12 col-md-10">
      <div class="row justify-center q-pa-md">
        <p class="text-center col-12">
          Tu palabra ingresa posiblemente tiene una acentuación de: {{ '<< acentuación >>' }}
        </p>

        <div v-html="parrafo1"></div>
      </div>
      <div class="row justify-center q-pa-md">
        <q-btn color="primary" icon="check" label="remove" @click="onClick" />
        <q-btn color="primary" icon="check" label="show" @click="show" />
        <pre>
          {{  response  }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
const { useMyStore } = require('../stores/responseQuery')

export default defineComponent({
  name: 'ResponsePage',
  setup (props) {
    const response = ref('')
    const myStore = useMyStore()

    /**
     * TODO:
     * Parte de la información va a venir desde el componente y otra desde el endpoint
     */
    //  https://unibetas.com/palabras-graves
    const title = ref('')
    const parrafo1 = ref(
      '<p class="text-center text-h3 col-12 q-py-lg"> Palabras graves </p>' +
      '<p class="text-justify q-px-md">Las palabras graves son las que tienen la mayor fuerza de voz en su penúltima sílaba. </p>' +
      '<p class="text-justify q-px-md">Como podemos intuir, <b>eso significa que para que una palabra pueda ser grave necesitará tener al menos dos sílabas. </b> Por ejemplo, “cable” (“ca – ble”) o “cosmos” (“cos – mos”).</p>' +
      '<p class="text-justify q-px-md"> <b>A las palabras graves se conoce también como “llanas”.</b> Sin que quepa duda, estas palabras son las más usadas en el español. Y podemos encontrarlas cortas, como “canto” (bisílaba), o largas, como “cauteloso” (tetrasílaba).</p>' +

      '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras graves </p>' +
      '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
          '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Árbol</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Mármol</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cuándo</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cuánto</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cómo</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Dónde</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Útil</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Jiménez</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Césped</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ámbar</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ángel</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cristóbal</td>' +
        '</tr>' +
      '</tbody>' +
      '</table>' +
      '<br/>' +

      '<p class="text-center text-h5 col-12 q-py-lg"> ¿Cuándo llevan tilde las palabras graves? </p>' +
      '<p class="text-justify q-px-md"> Las palabras graves llevan tilde siempre que no terminen en “n”, “s” ni vocal.</p>' +
      '<p class="text-justify q-px-md"> Si nos fijamos bien, estas normas son exactamente opuestas a las de las agudas. Tengamos presente eso, y nos será muy fácil recordarlas.</p>' +
      '<p class="text-justify q-px-md"> De ese modo, palabras como “ágil”, “cártel” y “lápiz” <b>llevan tilde</b>, <u>pues su terminación lo justifica</u>. En los primeros dos casos, acaban en “l”; en el tercero, en “z”. Por ende, pueden ir acentuadas.</p>' +

      '<p class="text-center text-h5 col-12 q-py-lg">Palabras graves sin tilde</p>' +
      '<p class="text-justify q-px-md">Naturalmente, existen en nuestro vocabulario muchas palabras graves sin tilde. <b>De hecho, la mayoría de ellas no la lleva.</b></p>' +
      '<p class="text-justify q-px-md">En este grupo podemos incluir términos como “saludo” y “cambien”. El primero acaba en vocal, mientras que el segundo termina en “n”. Por consiguiente,<b> no deben ir acentuados.</b></p>' +
      '<p class="text-justify q-px-md">Sea como sea, la mayor parte del tiempo nos toparemos con palabras graves que no tendremos que acentuar. Eso nos facilitará mucho la escritura.</p>' +

      '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras graves sin tilde </p>' +
      '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
          '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Caramelo</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Casa</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Silla</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Chocolate</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Amapola</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Carambola</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Amarillo</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calambre</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cangrejo</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cambio</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Canto</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calle</td>' +
          '</tr>' +
        '</tbody>' +
      '</table>' +
      '<br/>'

    )
    onMounted(() => {
      // console.log(myStore.myData)
      title.value = myStore?.myData?.title || 'Palabras agudas'
    })

    function onClick () {
      myStore.removeData()
      console.log(myStore.myData)
    }

    function show () {
      console.log(myStore.myData)
      console.log(
        myStore.myData.title
      )
    }

    return {
      response,
      onClick,
      show,
      // Response Api
      title,
      parrafo1
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
