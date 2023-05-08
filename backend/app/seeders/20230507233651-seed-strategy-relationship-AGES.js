'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'StrategyRelationship',
      [
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '',
              word: 'Tranvía',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px"> Vehículo de transporte colectivo que circula sobre raíles, impulsado por electricidad o vapor y que se desplaza por el centro de la calle, con capacidad para numerosos pasajeros.</p> <small> <i>  Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '',
              word: 'redes',
              acentuacion: 'átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px"> Una malla fabricada con hilos entrelazados de material resistente, utilizada para capturar animales.<br/><br/>Sustantivo plural que hace referencia a un conjunto de elementos interconectados entre sí con un fin determinado.</p> <small> <i>  Última silaba <b>átona</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Lunar',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px"> Pequeña mancha oscura en la piel que se diferencia del color circundante y que puede ser congénita o aparecer en algún momento de la vida. </p> <small> <i>  Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '',
              word: 'Partir',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Verbo transitivo que se refiere a separar en dos o más partes algo que antes formaba una unidad.<br/><br/>Manera intransitiva para indicar la acción de salir de un lugar o de comenzar un viaje. </p> <small> <i>  Penúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Canción',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Composición musical compuesta por una serie de sonidos que se organizan en un patrón rítmico y melódico y que generalmente están acompañados por letras que forman una poesía.</p> <small> <i>  Última silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Trueno',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Se refiere al ruido fuerte y estruendoso producido por una descarga eléctrica en la atmósfera durante una tormenta, que suele ir acompañado de un destello luminoso llamado relámpago.</p> <small> <i>  Última silaba <b>átona</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '',
              word: 'Súbito',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Adjetivo que describe algo que sucede o aparece de manera repentina e inesperada, sin previo aviso o advertencia.<br/><br/>Se refiere a algo que ocurre en un corto periodo de tiempo, sin que haya una preparación previa para ello.</p> <small> <i>  Antepenúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Duración',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Es la cantidad de tiempo durante el cual algo ocurre o existe.<br/><br/>Puede ser medida en segundos, minutos, horas, días, semanas, meses o años, dependiendo del contexto en el que se utilice.</p> <small> <i>  Penúltima y antepenúltima silabas <b>átonas</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Estar',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Es un verbo en infinitivo que se refiere a la acción de encontrarse, hallarse o existir en un lugar o situación determinada en un momento específico.</p> <small> <i>  Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '',
              word: 'Cúpula',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Es una estructura arquitectónica en forma de bóveda hemisférica o semiesférica que se utiliza para cubrir grandes espacios.Puede estar construida en diversos materiales, como ladrillo, piedra, madera o vidrio, y se utiliza en edificios religiosos, gubernamentales, culturales o comerciales. </p> <small> <i>  Última y penúltima silabas <b>átonas</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Sencillo',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Puede referirse a algo que es modesto o simple en diseño o apariencia. Puede utilizarse para describir una tarea o actividad que no es complicada o requiere poco esfuerzo. </p> <small> <i>  Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Sitio',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Espacio o lugar que ocupa algo o alguien.<br/><br/>Espacio urbano que forma una unidad perceptible y significativa, dotado de ciertas características funcionales, estéticas y culturales.</p> <small> <i>  Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '',
              word: 'Palanca',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Una barra rígida que se utiliza para levantar o mover objetos pesados al aplicar una fuerza en su extremo libre.<br/><br/>La palanca se compone de tres elementos: el punto de apoyo o fulcro, la fuerza aplicada en un extremo y la carga en el otro extremo.</p> <small> <i>Penúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Además',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Una conjunción que se utiliza para indicar que se va a añadir información o una idea adicional a lo que ya se ha mencionado. </p> <small> <i>Penúltima y antepenúltima silabas <b>tónicas</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Conseguir',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Es un verbo que significa lograr, obtener o adquirir algo que se desea o se necesita.<br/><br/> Es un verbo que denota acción y puede ser usado en diferentes contextos y situaciones.</p> <small> <i>Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '',
              word: 'Escupir',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Verbo transitivo que se refiere al acto de expulsar la saliva o los fluidos del tracto respiratorio de la boca </p> <small> <i>Penúltima y antepenúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Destrucción',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Es la acción y efecto de romper, es decir, arruinar, aniquilar o causar un daño grave y generalmente irreversible a algo o alguien</p> <small> <i>Penúltima y antepenúltima silabas <b>tónicas</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Entrevistar',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Se refiere a la acción de hacerle preguntas a alguien para obtener información o realizar una evaluación. En general, se trata de una conversación formal que se realiza con un propósito específico, como la obtención de información para un reportaje o para un trabajo.</p> <small> <i>Penúltima, antepenúltima y antes de la antepenúltima son silabas <b>átonas</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '',
              word: 'Lucrativo',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Adjetivo que se utiliza para describir algo que es muy rentable o que produce beneficios económicos significativos. También puede referirse a algo que es productivo o fructífero en general. </p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Síntomas',
              acentuacion: 'Átona',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Cualquier sensación o manifestación subjetiva que experimenta una persona y que es un signo de una enfermedad o trastorno. </p> <small> <i>Última y penúltima silabas <b>átonas</b><i> </small>',
            },
            {
              uuid: '',
              word: 'Cuando',
              acentuacion: 'Tónica',
              image: '',
              audio: '',
              significado:
                '<p style="font-size:16px">Conjunción temporal que se utiliza para introducir una frase subordinada que indica el momento en que se realiza la acción expresada en la frase principal. </p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StrategyRelationship', null, {})
  },
}
