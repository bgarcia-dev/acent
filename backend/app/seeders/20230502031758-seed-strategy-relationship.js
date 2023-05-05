'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'StrategyRead',
      [
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: 'c210693a-eb6d-11ed-a05b-0242ac120003',
              word: 'Género',
              acentuacion: 'esdrújula',
              image: 'género.jpg',
              audio: 'género.mp3',
              significado:
                '<p style="font-size:16px">Cuenta con una acepción que da cuenta de la clase a la que pertenece una cosa o un individuo. <br/><br/> Se refiere a una descripción de lo que es algo o alguien.</p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
            {
              uuid: 'd3a4c416-eb6d-11ed-a05b-0242ac120003',
              word: 'Genero',
              acentuacion: 'grave',
              image: 'genero.jpg',
              audio: 'genero.mp3',
              significado:
                '<p style="font-size:16px">Corresponde a una conjugación del verbo transitivo <i>“Generar”</i> hecha en primera persona del presente indicativo. <br/><br/> Estoy hablando de algo que estoy haciendo ahora mismo.</p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: 'd3a4c6be-eb6d-11ed-a05b-0242ac120003',
              word: 'Generó',
              acentuacion: 'aguda',
              image: 'generó.jpg',
              audio: 'generó.mp3',
              significado:
                '<p style="font-size:16px"> Constituye también una conjugación del verbo transitivo <i>“generar”</i> hecha en tercera persona del singular correspondiente al pretérito perfecto simple del modo indicativo. <br/><br/> Es una acción que hizo alguien en el pasado.</p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: '803cdfc4-5fbd-4b67-a8e6-de24a3e15546',
              word: 'Ánimo',
              acentuacion: 'esdrújula',
              image: 'ánimo.png',
              audio: 'ánimo.mp3',
              significado:
                '<p style="font-size:16px">Sustantivo que se refiere a la disposición o <b>actitud mental</b> de una persona, especialmente en cuanto a su capacidad para enfrentar dificultades o para realizar una tarea.</p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
            {
              uuid: '61e82898-66f7-43ef-a97e-e46382327941',
              word: 'Animo',
              acentuacion: 'grave',
              image: 'animo.gif',
              audio: 'animo.mp3',
              significado:
                '<p style="font-sanimó.jpgize:16px">Forma verbal conjugada en segunda persona singular del <b>presente</b> de indicativo del <b>verbo animar</b>, y significa "incitar, estimular o dar ánimo a alguien".</p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: '8db28b20-906e-413f-8f6c-b2d68cf998e5',
              word: 'Animó',
              acentuacion: 'aguda',
              image: 'animó.jpg',
              audio: 'animó.mp3',
              significado:
                '<p style="font-size:16px">Forma verbal conjugada en tercera persona singular del <b>pasado</b> de indicativo del verbo animar, y se refiere a una acción que se realizó en el pasado y que ya ha concluido.</p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: 'f6e5e73c-eb79-11ed-a05b-0242ac120003',
              word: 'Tránsito',
              acentuacion: 'Esdrújula',
              image: 'Tránsito.png',
              audio: 'Tránsito.mp3',
              significado:
                '<p style="font-size:16px">Acción o efecto de transitar. Paso o circulación de personas o vehículos por una vía pública o carretera. También se refiere al tiempo que se tarda en realizar un trayecto. </p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
            {
              uuid: 'f6e5e9ee-eb79-11ed-a05b-0242ac120003',
              word: 'Transito',
              acentuacion: 'Grave',
              image: 'Transito.png',
              audio: 'Transito.mp3',
              significado:
                '<p style="font-size:16px">Primera persona del singular del <b>presente</b> del verbo transitar. Acción de transitar o pasar por un lugar o una vía. </p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: 'f6e5efca-eb79-11ed-a05b-0242ac120003',
              word: 'Transitó',
              acentuacion: 'Aguda',
              image: 'Transitó.png',
              audio: 'Transitó.mp3',
              significado:
                '<p style="font-size:16px">Tercera persona del singular del pretérito indefinido del verbo transitar. Acción de haber transitado o pasado por un lugar o una vía en un <b>tiempo pasado</b>.</p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: '492442a1-4a03-43ec-b691-58fc728acef7',
              word: 'Crítico',
              acentuacion: 'Esdrújula',
              image: 'Crítico.jpg',
              audio: 'Crítico.mp3',
              significado:
                '<p style="font-size:16px">Que juzga o analiza algo de manera minuciosa y rigurosa, especialmente en el ámbito artístico o literario.<br/></br>Persona que se dedica a la crítica de arte, cine, literatura, entre otros.</p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
            {
              uuid: 'bc37a118-2406-4716-8312-4eb4b5c40006',
              word: 'Critico',
              acentuacion: 'Grave',
              image: 'Critico.jpg',
              audio: 'Critico.mp3',
              significado:
                '<p style="font-size:16px"> <b>Presente</b> del verbo criticar. Acción de juzgar o señalar con crítica negativa algo o alguien, con el fin de destacar los errores o fallos.</p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: '5095ef49-b329-402b-9839-43337428338d',
              word: 'Criticó',
              acentuacion: 'Aguda',
              image: 'Criticó.jpg',
              audio: 'Criticó.mp3',
              significado:
                '<p style="font-size:16px">Acción de juzgar o señalar con crítica negativa algo o alguien, que ocurrió en el <b>pasado.</b></p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: '895f8468-eb8b-11ed-a05b-0242ac120003',
              word: 'Acúmulo',
              acentuacion: 'Esdrújula',
              image: 'Acúmulo.jpg',
              audio: 'Acúmulo.mp3',
              significado:
                '<p style="font-size:16px">Sustantivo que se refiere a la acción o resultado de acumular o amontonar algo, en una cantidad grande o en un lugar específico.</p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
            {
              uuid: '895f86de-eb8b-11ed-a05b-0242ac120003',
              word: 'Acumulo',
              acentuacion: 'Grave',
              image: 'Acumulo.jpg',
              audio: 'Acumulo.mp3',
              significado:
                '<p style="font-size:16px"><b>Presente</b> del verbo acumular, que indica la acción de ir juntando o sumando algo en una cantidad mayor.</p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: '895f8828-eb8b-11ed-a05b-0242ac120003',
              word: 'Acumuló',
              acentuacion: 'Aguda',
              image: 'Acumuló.jpg',
              audio: 'Acumuló.mp3',
              significado:
                '<p style="font-size:16px">Pretérito indefinido del verbo acumular, que indica la acción de juntar o reunir algo en una cantidad mayor en un <b>tiempo pasado</b> específico.</p> <small> <i>Acentuación :  Aguda<i> </small>',
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
