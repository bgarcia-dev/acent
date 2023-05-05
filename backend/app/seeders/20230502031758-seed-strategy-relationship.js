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
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StrategyRelationship', null, {})
  },
}
