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
      '<p class="text-center text-h3 col-12 q-py-lg"> Palabras tónicas </p>' +
      '<p class="text-justify q-px-md">Las palabras tónicas <b>son todas aquellas palabras que se pronuncian acentuando una de sus sílabas</b>. ' +
        'La sílaba acentuada de la palabra tónica, a su vez, se denominará sílaba tónica. ' +
        'No todas las palabras en español se perciben, en la lengua hablada, con el mismo grado de tonicidad. ' +
        'Son tónicas las siguientes clases de palabras. </p>' +
'<ul>' +
'<li class="q-my-sm"><b>Sustantivos</b> la <i>puerta</i>, la <i>pelota</i>, el <i>amigo</i>, el <i>jardín</i>.</li>' +
'<li class="q-my-sm"><b>Adjetivos</b> la <i>bonita</i> puerta, el jardín <i>bello</i>.</li>' +
'<li class="q-my-sm"><b>Verbos y sus formas auxiliares</b> <i>hice</i> la comida, <i>ha</i> llovido, <i>ha</i> entrado.</li>' +
'<li class="q-my-sm"><b>Adverbios</b> <i>no</i> lloverá, estuvo <i>bien</i>, <i>nunca</i> viene. También los adverbios terminados en <i>-mente</i></b> vienen <i>lentamente</i>, celebran <i>alegremente</i>.</li>' +
'<li class="q-my-sm"><b>Pronombres personales</b> yo, tú, él, ella, ellos, ellas, nosotros, nosotras, vosotros, vosotras, nos, vos, usted, ustedes, mí, ti, sí, conmigo, contigo, consigo.</li>' +
'<li class="q-my-sm"><b>Demostrativos</b> <i>esa</i> lámpara, <i>este</i> carro, <i>aquella</i> puerta.</li>' +
'<li class="q-my-sm"><b>Posesivos</b> mío, tuyo, suyo, nuestro, vuestro, y sus femeninos y plurales.</li>' +
'<li class="q-my-sm"><b>Indefinidos</b> <i>unos</i> chicos, <i>ninguna</i> canción, <i>algún</i> pariente, <i>varias</i> personas.</li>' +
'<li class="q-my-sm"><b>Numerales</b> <i>dos</i> sillas, en <i>tercer puesto</i>, <i>quinientas</i> veces.</li>' +
'<li class="q-my-sm"><b>Interrogativos y exclamativos</b> <i>qué</i> quieres, <i>cuántas</i> personas, <i>quién</i> es, dime <i>cuál</i>.</li>' +
'<li class="q-my-sm">Algunas <b>conjunciones</b>, sobre todo si son derivadas de adverbios como, por ejemplo, <i>así</i>: “no lo reconoce, <i>así</i> se lo digas mil veces”; o <i>apenas</i>: “apenas me vio, me identificó”. También son tónicos algunos usos de la conjunción y, como, por ejemplo: “¿<i>y</i> viene?”, “¿<i>y</i> el vaso de agua?”</li>' +
'<li class="q-my-sm"><b>Preposición según.</b> Por ejemplo: “Todo es positivo <i>según</i> se vea”.</li>' +
'</ul>' +
'<br/>' +
'<p class="text-center text-h5 col-12 q-py-lg"> Palabras tónicas que se pronuncian como átonas </p>' +
'<p class="text-justify q-px-md"> Algunas palabras tónicas se pronuncian como átonas en determinados casos, principalmente cuando son el primer elemento en ciertas expresiones ' +
'que se encuentran formadas por varias palabras escritas separadamente. Así, pues, aunque son tónicas, son pronunciadas como átonas en los siguientes casos: <p>' +
  '<ul>' +
    '<li class="q-my-sm">Cuando constituyen el primer elemento de numerales complejos: cuarenta mil (cuarenta<b>míl</b>), treinta y dos (treitai<b>dós</b>), vigésimo primero (vigesimo<b>priméro</b>).</li>' +
'<li class="q-my-sm">Cuando son el primer elemento de una locución: cuesta abajo (cuest<b>abájo</b>), medio ambiente (medio<b>ambiénte</b>), mientras tanto (mientras<b>tánto</b>).</li>' +
'<li class="q-my-sm">Cuando se antepone un sustantivo o adjetivo a otro sustantivo, siendo que la expresión nominal funciona como vocativo: capitán Ochoa (capitan<b>ochóa</b>), buen hombre (buen<b>ómbre</b>).</li>' +
  '</ul>'

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
