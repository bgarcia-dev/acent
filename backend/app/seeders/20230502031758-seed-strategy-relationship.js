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
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: 'a94afaca-1480-4f31-b321-4bb400523419',
              word: 'Continuo',
              acentuacion: 'Grave',
              image: 'Continuo.jpg',
              audio: 'Continuo.mp3',
              significado:
                '<p style="font-size:16px">Adjetivo o sea que califica a un sustantivo, del tal forma que se puede usar para indicar proximidad o aproximación<br/><br/>Ejemplo: En el edificio <i>proximo<i/> hay varias oficinas de abogados.  <p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: '99a9dd30-945a-4f50-a880-168f4934dde6',
              word: 'Continúo',
              acentuacion: 'Grave',
              image: 'Continúo.jpg',
              audio: 'Continúo.mp3',
              significado:
                '<p style="font-size:16px">Es la primera persona singular del <b>presente</b> indicativo del verbo continuar, que indica que una acción o proceso sigue sin interrupción.</p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: '0e5b2554-112e-40ac-a9c0-c382b5d1d714',
              word: 'Continuó',
              acentuacion: 'Aguda',
              image: 'Continuó.png',
              audio: 'Continuó.mp3',
              significado:
                '<p style="font-size:16px">Es la tercera persona singular del pretérito indefinido del verbo continuar, que indica que una acción o proceso siguió sin interrupción en el <b>pasado</b>.</p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: '6bbc8f0a-eb95-11ed-a05b-0242ac120003',
              word: 'Práctico',
              acentuacion: 'Esdrújula',
              image: 'Práctico.jpg',
              audio: 'Práctico.mp3',
              significado:
                '<p style="font-size:16px">Que es útil, conveniente o adecuado para la realización de una tarea o actividad.<p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
            {
              uuid: '6bbc9374-eb95-11ed-a05b-0242ac120003',
              word: 'Practico',
              acentuacion: 'Grave',
              image: 'Practico.jpg',
              audio: 'Practico.mp3',
              significado:
                '<p style="font-size:16px">Primera persona singular del <b>presente</b> indicativo del verbo practicar, que significa realizar una actividad de manera habitual o para mejorar en ella.<p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: '6bbc975c-eb95-11ed-a05b-0242ac120003',
              word: 'Practicó',
              acentuacion: 'Aguda',
              image: 'Practicó.jpg',
              audio: 'Practicó.mp3',
              significado:
                '<p style="font-size:16px">Tercera persona singular del pretérito indefinido del verbo practicar, que significa realizar una actividad en el <b>pasado</b>.<p> <small> <i>Acentuación : Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: 'da5492e1-8f37-42cc-9980-2d4d0e62879d',
              word: 'Centrífugo',
              acentuacion: 'Esdrújula',
              image: 'Centrífugo.png',
              audio: 'Centrífugo.mp3',
              significado:
                '<p style="font-size:16px">Se refiere a una fuerza o efecto que tiende a alejarse del centro, como la fuerza centrífuga en un objeto que gira.<p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
            {
              uuid: 'bf49226d-9cec-4bfb-bca6-75a9c9559be5',
              word: 'Centrifugo',
              acentuacion: 'Grave',
              image: 'Centrifugo.jpg',
              audio: 'Centrifugo.mp3',
              significado:
                '<p style="font-size:16px">Es la forma <b>presente</b> del verbo centrifugar, que significa separar o aislar partículas sólidas de un líquido mediante la aplicación de una fuerza centrífuga.<p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: 'd60994e1-572d-4f75-b0c4-b75864d5ea58',
              word: 'Centrifugó',
              acentuacion: 'Aguda',
              image: 'Centrifugó.jpg',
              audio: 'Centrifugó.mp3',
              significado:
                '<p style="font-size:16px">Es la tercera persona del singular del pretérito indefinido del verbo centrifugar, que indica que alguien realizó la acción de centrifugar en el <b>pasado</b>.<p> <small> <i>Acentuación : Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: 'ced298ac-635f-4919-87fb-2d94913a3b51',
              word: 'Diálogo',
              acentuacion: 'Esdrújula',
              image: 'Diálogo.jpg',
              audio: 'Diálogo.mp3',
              significado:
                '<p style="font-size:16px">Conversación entre dos o más personas en la que se intercambian ideas, opiniones o información.<p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
            {
              uuid: 'e8d9d3ba-306c-4c6c-b1ac-56cc0006065e',
              word: 'Dialogo',
              acentuacion: 'Grave',
              image: 'Dialogo.png',
              audio: 'Dialogo.mp3',
              significado:
                '<p style="font-size:16px">Primera persona del singular del <b>presente</b> de indicativo del verbo dialogar, que significa entablar un diálogo o conversación con alguien.<p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: 'be357531-4872-4da6-8930-75fee2e55d5f',
              word: 'Dialogó',
              acentuacion: 'Aguda',
              image: 'Dialogó.png',
              audio: 'Dialogó.mp3',
              significado:
                '<p style="font-size:16px">Tercera persona del singular del pretérito indefinido del verbo dialogar, que indica que una persona mantuvo una conversación o diálogo con alguien en el <b>pasado</b>.<p> <small> <i>Acentuación : Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: 'e13bac4e-5934-4ca9-a8f7-66bffffeb0a8',
              word: 'Hábito',
              acentuacion: 'Esdrújula',
              image: 'Hábito.jpg',
              audio: 'Hábito.mp3',
              significado:
                '<p style="font-size:16px">Es un sustantivo que se refiere a una costumbre o comportamiento adquirido por la repetición frecuente de ciertas acciones. También puede referirse a la vestimenta o atuendo característico de una orden religiosa.<p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
            {
              uuid: 'd3e259fd-2c25-44a3-98f1-37bbca8537bb',
              word: 'Habito',
              acentuacion: 'Grave',
              image: 'Habito.jpg',
              audio: 'Habito.mp3',
              significado:
                '<p style="font-size:16px">Es el <b>presente</b> del verbo habitar, que significa vivir en una casa o lugar determinado.<p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: '9a112b27-50fa-47e6-8175-fc05c5073d6c',
              word: 'Habitó',
              acentuacion: 'Aguda',
              image: 'Habitó.jpg',
              audio: 'Habitó.pm3',
              significado:
                '<p style="font-size:16px">Es el pretérito indefinido del verbo habitar, que se utiliza para indicar que alguien vivió en un lugar en el <b>pasado</b>.<p> <small> <i>Acentuación : Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: '4df3a63f-4c4c-4db9-887e-aed9957805ee',
              word: 'Próspero',
              acentuacion: 'Esdrújula',
              image: 'Próspero.jpg',
              audio: 'Próspero.mp3',
              significado:
                '<p style="font-size:16px"><b>Adjetivo</b> que describe a una persona, empresa o situación que tiene éxito y prosperidad económica o financiera.<p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
            {
              uuid: 'e2347086-e6af-4ee9-88b8-b90e02dfe001',
              word: 'Prospero',
              acentuacion: 'Grave',
              image: 'Prospero.jpg',
              audio: 'Prospero.mp3',
              significado:
                '<p style="font-size:16px">Primera persona singular del presente del verbo prosperar. Ejemplo: "Espero que mi negocio prospero con el tiempo<p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: 'bd67564b-4cf5-4534-883d-473bd4c9e6e1',
              word: 'Prosperó',
              acentuacion: 'Aguda',
              image: 'Prosperó.jpg',
              audio: 'Prosperó.mp3',
              significado:
                '<p style="font-size:16px">Tercera persona singular del pretérito indefinido del verbo prosperar.Verbo prosperar en tiempo <b>pasado</b><p> <small> <i>Acentuación : Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'Tritonica',
          content: JSON.stringify([
            {
              uuid: '713ae166-c1f4-4d17-95cf-a3aec444550a',
              word: 'Júbilo',
              acentuacion: 'Esdrújula',
              image: 'Júbilo.png',
              audio: 'Júbilo.mp3',
              significado:
                '<p style="font-size:16px">Sustantivo que se refiere a la alegría o el regocijo intenso y manifestado con intensidad.<p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
            {
              uuid: '04559046-3e78-4d2f-8c0f-6bb3875c342b',
              word: 'Jubilo',
              acentuacion: 'Gave',
              image: 'Jubilo.jpg',
              audio: 'Jubilo.mp3',
              significado:
                '<p style="font-size:16px"><b>Presente</b> del verbo jubilar, que puede referirse a la acción de retirar del servicio o jubilar a alguien, o a la acción de alegrar o regocijar.<p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: '1bdbcc27-863a-4d18-9da0-dff444537f8a',
              word: 'Jubiló',
              acentuacion: 'Aguda',
              image: 'Jubiló.png',
              audio: 'Jubiló.mp3',
              significado:
                '<p style="font-size:16px">pretérito indefinido del verbo jubilar, que indica que alguien jubiló o retiró del servicio a alguien más en el <b>pasado</b>.<p> <small> <i>Acentuación : Aguda<i> </small>',
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
