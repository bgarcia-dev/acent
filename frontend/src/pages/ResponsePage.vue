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
      '<p class="text-center text-h3 col-12 q-py-lg"> Palabras tritónicas </p>' +
      '<p class="text-justify q-px-md">' +
        'Hay palabras que tienen los mismos sonidos y que se escriben con las mismas letras que otras, pero la situación de su sílaba tónica varía y con ella también cambia el significado. ' +
        'Se llaman tritónicas aquellas palabras que pueden tener la sílaba tónica en tres (tri-) posiciones diferentes, su acento es lo que las diferencia.' +
        '</p>' +
      '<p class="text-justify q-px-md">Veamos el siguiente ejemplo:</p>' +
      '<p class="text-justify q-px-md">Ejemplo 1: Término / Termino / Terminó  </p>' +
      '<ul>' +
        '<li class="q-my-sm">Por favor, no me hables en esos <b><i>términos</i></b></li>' +
        '<li class="q-my-sm">Ya casi <i><b>termino</i></b> el documento y cuando lo tenga listo, te lo envío</li>' +
        '<li class="q-my-sm">Andrés <b><i>terminó</i></b> la tarea muy rápido y después salió a cine con su novia</li>' +
        '</ul>' +
        '<br/>' +
        '<p class="text-justify q-px-md">Este ejercicio es muy importante porque cuando estamos aprendiendo el modo subjuntivo del español, sucede con mucha frecuencia que se confunde la pronunciación del verbo en subjuntivo con la pronunciación del verbo en pasado.</p>' +
        '<p class="text-justify q-px-md">Es muy diferente decir <i>“Yo hablé con ella ayer”</i> a decir <i>“Ojalá, ella hable mañana en la reunión”</i>.</p>' +

        '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras tritónicas </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cálculo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calculo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calculó</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Práctico</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Practico</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Practicó</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Público</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Publico</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Publicó</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Género</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Genero</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Genero</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Título</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Titulo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Tituló</td>' +
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
