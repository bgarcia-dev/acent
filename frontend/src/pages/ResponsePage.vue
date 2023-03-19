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
      '<p class="text-center text-h3 col-12 q-py-lg"> Palabras esdrújulas </p>' +
      '<p class="text-justify q-px-md">Las palabras esdrújulas son las que tienen la mayor fuerza de voz en la antepenúltima sílaba.</p>' +
      '<p class="text-justify q-px-md"> <b>Las palabras esdrújulas pueden ser palabras de muchas clases: sustantivos, verbos, adjetivos e incluso adverbios.</b> Por ende, son quizá las más variadas en ese sentido dentro de nuestro idioma.</p>' +

      '<p class="text-center text-h5 col-12 q-py-lg"> ¿Cuándo llevan tilde las palabras esdrújulas? </p>' +
      '<p class="text-center" col-12 q-px-md"> <b><u>Las palabras esdrújulas siempre llevan tilde, sin excepciones.</u></b></p>' +
      '<p class="text-justify q-px-md"><b>Esa regla es válida sin importar ni la cantidad de sílabas presentes</b> en la palabra ni tampoco su terminación. La única <b>condición</b> indispensable es que el acento de tipo prosódico se halle en la antepenúltima sílaba.</p>' +
      '<p class="text-justify q-px-md">De esa manera, una palabra esdrújula como “pájaro” (trisílaba) va siempre con su acento ortográfico, al igual que “espectáculo” (pentasílaba). Lo mismo con “súbita” (que termina en vocal) y con “déficit” (que acaba en “t”).</p>' +

      '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras esdrújulas </p>' +
      '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
          '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ábaco</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ímpetu</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Prójimo</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ámbito</td>' +
        '</tr>' +
        '<tr>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Órbita</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Fábula</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Lógica</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Crédito</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Sábado</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Prólogo</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Píldora</td>' +
          '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Máximo</td>' +
        '</tr>' +
      '</tbody>' +
      '</table>' +
      '<br/>' +

      '<p class="text-center text-h5 col-12 q-py-lg"> Excepción a la regla <br/> (Palabras esdrújulas sin tilde) </p>' +

      '<p class="text-justify" col-12 q-px-md">Si ya dijimos que toda palabra esdrújula va acentuada, no puede ser posible que haya una que no lleve tilde. Sin embargo, hay un grupo de palabras que hacen dudar a muchos sobre esto.</p>' +

      '<p class="text-justify" col-12 q-px-md"><b>Todas comparten una misma terminación:</b> “audazmente”, “locuazmente”, etc. Asimismo todas pertenecen a una misma categoría gramatical: el adverbio. Pues bien, sucede lo siguiente:</p>' +

      '<p class="text-center col-12 q-px-md"><u><b>Todos los adverbios terminados en “mente” tienen una acentuación especial.</b></u></p>' +

      '<p class="text-justify" col-12 q-px-md">Por consiguiente, para poder tildarlos <b>no basta</b> con que identifiquemos dónde está <b>el acento prosódico</b>, sino que hay que fijarse en <b>otro detalle</b>.</p>' +

      '<p class="text-center text-h6" col-12 q-px-md">¿Cómo tildar los adverbios terminados en “mente”?<p>' +

      '<p class="text-justify" col-12 q-px-md">Estos adverbios son en realidad la unión de dos palabras. En primer lugar, un adjetivo; en segundo, la palabra “mente”.<br/>' +
      'Esa fórmula nunca cambia. <b>Lo que sí puede variar es la acentuación.</b> Esta última dependerá del adjetivo pues si llevaba tilde, se conserva, y si no, se deja tal cual.</p>' +

      '<p class="text-justify" col-12 q-px-md">Tomemos de vuelta el <b>ejemplo</b> de <i>“audazmente”</i>. Si pronunciamos esta palabra, nuestro oído pareciera indicarnos que el acento prosódico está en <i>“daz”</i>, tal como en el adjetivo original, por lo que la catalogaríamos como palabra esdrújula.</p>' +
      '<p class="text-justify" col-12 q-px-md"><b>No obstante, en esta situación el criterio que debemos seguir no es sonoro, sino gráfico</b>. Y si nos fijamos, el adjetivo <i>“audaz”</i> no lleva tilde, así que no podemos agregársela en el adverbio.</p>' +
      '<p class="text-justify" col-12 q-px-md">Por lo tanto, a pesar de que “audazmente” nos suene como una esdrújula no debemos acentuarla basándonos en eso. Tan solo apliquemos la norma anterior, y no cometeremos ningún error.</p>'
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
