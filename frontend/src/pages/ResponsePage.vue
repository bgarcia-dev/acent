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
      '<p class="text-center text-h4 col-12 q-py-lg"> Palabras sobreesdrújulas </p>' +
      '<p class="text-justify q-px-md">Las palabras sobreesdrújulas son aquellas <b>cuya sílaba tónica (la más intensa) es la anterior a la antepenúltima.</b> Según las reglas de acentuación del español, siempre llevan tilde (´):</p>' +
      '<ul class="self-center">' +
        '<li>Júramelo</li>' +
        '<li>Mostrándoselas</li>' +
        '<li>Recordándotelo</li>' +
        '<li>Encontrándomelo</li>' +
        '<li>Tráetelo</li>' +
      '</ul>' +
      '<p class="text-justify q-px-md"> Para referirnos a este tipo de palabras, cabe destacar que los términos <i>sobreesdrújula</i> (con dos letras e) y <i>sobresdrújula</i> (con una letra e) son igualmente válidos.</p>' +

      '<p class="text-center text-h5 col-12 q-py-lg"> ¿ Cómo se forman las palabras sobresdrújulas ? </p>' +
      '<p class="text-justify q-px-md"> Las sobresdrújulas son palabras excepcionales en el español y de muy poco uso en la escritura. Esto se debe a que <b>son verbos a los que se le añaden pronombres al final de la palabra</b>.</p>' +
      '<p class="text-justify q-px-md">Estos pronombres son los llamados enclíticos y son <i>me, te, se, nos, os, lo, la, los, las</i>). Los pronombres <i>le y les</i> no pueden aparecer junto a <i>lo, la, los y las</i>.</p>' +
      '<p class="text-justify q-px-md">Los verbos, a los que se les añaden dichos pronombres, pueden estar en gerundio o en imperativo.</p>' +

      '<p class="text-center text-h5 col-12 q-py-lg"> Sobresdrújulas formadas por gerundios y pronombres </p>' +
      '<p class="text-justify q-px-md">A un verbo en gerundio <i>(cantando, comiendo, viviendo)</i> se le añaden dos pronombres al final de la palabra:</p>' +
'<ul>' +
  '<li>Está todo el tiempo recordándomelo.</li>' +
  '<li>El dependiente estaba vendiéndotelo y no quise interrumpir.</li>' +
  '<li>Sobre el regalo, vi que estabas comprándoselo.</li>' +
  '<li>¡Se pasó el día repitiéndoselo todo el rato!</li>' +
  '<li>Acerca de la canciones, ayer estuvimos cantándoselas por la tarde.</li>' +
'</ul>' +

  '<p class="text-center text-h5 col-12 q-py-lg"> Sobresdrújulas formadas con imperativos y pronombres </p>' +
  '<p class="text-justify q-px-md">A un verbo en imperativo (<i>cante, come, vivan</i>) se le añaden dos pronombres al final de la palabra:</p>' +
  '<p class="text-justify q-px-md"><b>Por ejemplo:</b></p>' +
  '<ul>' +
    '<li>Permítaseme hablar un momento acerca de la naturaleza.</li>' +
    '<li>¡Júramelo o niégamelo!</li>' +
    '<li>Véndeselo de una vez, que está deseando comprar.</li>' +
    '<li>Recuérdamelo más tarde, que ahora estoy ocupado.</li>' +
    '<li>Esas cajas del suelo, quítenmelas de ahí, por favor.</li>' +
    '</ul>' +
    '<p class="text-center text-h5 col-12 q-py-lg"> ¿Son sobresdrújulas las palabras terminadas en <i>"mente"</i>? </p>' +
    '<p class="text-justify q-px-md">Los adverbios que terminan en -mente no son sobresdrújulas. Esto se debe a que este tipo de palabras posee dos sílabas tónicas: la propia del adjetivo y la del sufijo. Aunque posean dos sílabas tónicas, solo llevan una tilde.</p>'

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
