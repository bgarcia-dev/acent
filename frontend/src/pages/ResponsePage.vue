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
      '<p class="text-center text-h3 col-12 q-py-lg"> Palabras átonas </p>' +
      '<p class="text-justify q-px-md">' +
        'Son palabras átonas todas <b>aquellas que se pronuncian sin acento en la cadena hablada.</b> La gran mayoría de las palabras monosílabas, y unas cuantas bisílabas y trisílabas son átonas. ' +
        'La mayor parte de las palabras trisílabas son naturalmente tónicas. Así, pues, en español son átonas las siguientes clases de palabras: ' +
      '</p>' +

      '<ul>' +
      '<li class="q-my-sm"><b>Artículos</b>: el, la, lo, los, las. Por ejemplo: <i>el</i> cielo, <i>la</i> lluvia, <i>los</i> días.</li>' +
      '<li class="q-my-sm"><b>Posesivos</b>: cuando están antepuestos al nombre: mi, tu, su, nuestro, nuestro, y sus formas femeninas y plurales. Por ejemplo: <i>mi</i> papá, <i>tu</i> traje, <i>nuestro</i> uniforme.</li>' +
      '<li class="q-my-sm">Algunos <b>adverbios</b> como <i>tan</i>, <i>medio</i>. Por ejemplo: <i>tan</i> desilusionado, <i>medio</i> loco. También aun en ciertos casos: <i>aun</i> los más críticos lo aceptaron.</li>' +
      '<li class="q-my-sm">Algunos <b>sustantivos</b> cuando son utilizados como fórmula de tratamiento y se encuentran antepuestos a nombres propios: don, doña, fray, sor, san, santo, santa. Por ejemplo: <i>doña</i> Consuelo, <i>santo</i> Tomás, <i>sor</i> Juana.</li>' +
      '<li class="q-my-sm"><b>Pronombres personales:</b> me, te, se, lo, los, la, las, le, les, nos. Por ejemplo: <i>me</i> vio, <i>se</i> cayó, <i>la</i> busqué, <i>nos</i> encontró.</li>' +
      '<li class="q-my-sm"><b>Relativos:</b> que, quien, donde, como, cuando, cuanto, salvo cual. Por ejemplo: la universidad <i>donde</i> estudié, el modo como me habla, hice <i>cuanto</i> pude.</li>' +
      '<li class="q-my-sm"><b>Conjunciones</b>, salvo algunas excepciones: uno y otro, lo haremos <i>aunque</i> se oponga, no lo sé, <i>pues</i> no me avisó, etc.</li>' +
      '<li class="q-my-sm"><b>Preposiciones</b>, excepto según: <i>para</i> dentro, <i>en</i> casa, <i>por</i> tonto, <i>con</i> dinero, <i>sin</i> amigos.</li>' +

'</ul>' +
'<br/>' +

'<p class="text-center text-h5 col-12 q-py-lg"> Palabras tónicas que se pronuncian como átonas </p>' +
'<p class="text-justify q-px-md"> Algunas palabras tónicas se pronuncian como átonas en determinados casos, principalmente cuando son el primer elemento en ciertas expresiones ' +
'que se encuentran formadas por varias palabras escritas separadamente. Así, pues, aunque son tónicas, son pronunciadas como átonas en los siguientes casos: <p>' +
  '<ul>' +
    '<li class="q-my-sm">Cuando constituyen el primer elemento de numerales complejos: cuarenta mil (cuarenta<b>míl</b>), treinta y dos (treitai<b>dós</b>), vigésimo primero (vigesimo<b>priméro</b>).</li>' +
'<li class="q-my-sm">Cuando son el primer elemento de una locución: cuesta abajo (cuest<b>abájo</b>), medio ambiente (medio<b>ambiénte</b>), mientras tanto (mientras<b>tánto</b>).</li>' +
'<li class="q-my-sm">Cuando se antepone un sustantivo o adjetivo a otro sustantivo, siendo que la expresión nominal funciona como vocativo: capitán Ochoa (capitan<b>ochóa</b>), buen hombre (buen<b>ómbre</b>).</li>' +
'</ul>' +
  '<br/>' +
  '<p class="text-justify q-px-md">' +
        'En la cadena hablada, las palabras átonas, puesto que no tienen acento propio, se comportan de una manera particular: ' +
        'se “apoyan” en la sílaba tónica de la palabra que las sigue o antecede, con la cual formarán lo que denominamos como grupo acentual.' +
      '</p>' +
  '<p class="text-justify q-px-md"> Dependiendo de la posición de la palabra con la que formen el grupo acentual, las palabras átonas podrán ser de dos tipos: <b>proclíticas</b> y <b>enclíticas</b>: </p>' +
  '<p class="text-justify q-px-md">' +
    '<b>Proclíticas</b> son aquellas palabras átonas que <b>forman grupo acentual con la palabra tónica que tienen a continuación.</b>' +
    'Así, por ejemplo, en el enunciado: se lo esperaba, las palabras proclíticas serán <i>se</i> y <i>lo</i>, que se apoyan en la sílaba tónica del verbo: seloesperába.' +
    '</p>' +
  '<p class="text-justify q-px-md">' +
    '<b>Enclíticas</b> son aquellas palabras átonas que <b>forman grupo acentual con la palabra tónica que las antecede.</b> ' +
    'Por ejemplo, en el enunciado: piénsatelo, las palabras enclíticas son los pronombres te y lo, que se pronuncian apoyados en el verbo.' +
    '</p>'

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
