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
    const title = ref('')
    const parrafo1 = ref(
      '<p class="text-center text-h3 col-12 q-py-lg"> Palabras agudas </p>' +
      '<p class="text-justify q-px-md">También llamadas oxítonas. Su sílaba tónica es la última y se <b>escriben con tilde cuando terminan en vocal</b> (mamá), <b>-n</b> (canción) o <b>-s</b> (jamás).</p>' +
      '<p class="text-justify q-px-md">No se escribe sin tilde en en el resto de las terminaciones (<i>animal, señor, pared, cantar...</i>). Tampoco lleva tilde Si la <b>-s</b> va detrás de otra consonante (<i>debuts, robots</i>).</p>' +
      '<p class="text-justify q-px-md">Más ejemplos:</p>' +
      '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
          '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">además</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">ají</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">salud</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">sofá</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tacón</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">calor</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">pesar</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">reloj</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">maní</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">marroquí</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tambor</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">cabezón</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">sillín</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">cojín</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">aprendiz</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">vivir</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">volar</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">avión</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tragaluz</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">león</td>' +
        '</tr>' +
      '</tbody>' +
      '</table>' +
      '<br/>' +

      '<p class="text-center text-h5 col-12 q-py-lg"> Ejemplos de palabras agudas <b>con</b> tilde </p>' +
      '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">además</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">ají</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">salud</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">sofá</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tacón</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">calor</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">pesar</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">reloj</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">maní</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">marroquí</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tambor</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">cabezón</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">sillín</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">cojín</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">aprendiz</td>' +
          '</tr>' +
        '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">vivir</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">volar</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">avión</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tragaluz</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">león</td>' +
        '</tr>' +
      '</tbody>' +
      '</table>' +
      '<br/>' +

      '<p class="text-center text-h5 col-12 q-py-lg"> Ejemplos de palabras agudas <b>sin</b> tilde </p>' +
      '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
          '<tr>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Felicidad</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Hacer</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Buscar</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Escozor</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Abril</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Candil</td>' +
            '</tr>' +
          '<tr>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Vislumbrar</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Perseguir</td>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Regaliz</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '<br/>' +

            '<p class="text-center text-h5 col-12 q-py-lg"><b>Excepciones a la regla</b></p>' +
            '<p class="text-justify q-px-md">Llevan tilde las palabras con hiato (con dos vocales contiguas) aunque no terminen en -n, en -s ni en vocal.</p>' +
            '<p class="text-justify q-px-md">Esto se debe a que el acento gráfico que marca los hiatos es independiente de las reglas generales de acentuación.</p>'

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
