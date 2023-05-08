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
              uuid: 'b1733b8f-ec0e-4869-8e47-c92f43c07afc',
              word: 'Lápiz',
              acentuacion: 'Grave',
              image: 'Lápiz.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Instrumento de escritura y dibujo que consta de una mina o varilla de grafito o de otro material, generalmente de forma alargada y cilíndrica, insertada en un soporte de madera o plástico.</p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: '1a680d74-b9af-44d2-a1cc-33892bcb44dd',
              word: 'Árbol',
              acentuacion: 'Grave',
              image: 'Árbol.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Sustantivo masculino que se refiere a una planta perenne, de tronco leñoso que se ramifica a cierta altura del suelo formando una copa y que, generalmente, tiene una altura superior a los tres metros. </p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: 'ecffb386-5909-432c-91f3-d3ccf4de3730',
              word: 'Lógica',
              acentuacion: 'Esdrújula',
              image: 'Lógica.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Es una disciplina filosófica que estudia los principios del razonamiento válido y correcto, así como las inferencias y las relaciones que se establecen entre ellos.</p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '4b915bcf-7167-430e-8ac8-d040eff1f97c',
              word: 'Café',
              acentuacion: 'Aguda',
              image: 'Café.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Bebida que se obtiene al infusionar los frutos secos del cafeto tostados y molidos.<br/><br/>Color marrón oscuro que recuerda al de la bebida del mismo nombre.</p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
            {
              uuid: 'c0eeeb78-109e-4f7a-b723-d1c3634c2e40',
              word: 'Césped',
              acentuacion: 'Grave',
              image: 'Césped.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Conjunto de hierbas menudas y apretadas que cubren la tierra en los prados, jardines y campos deportivos, y que se siegan a intervalos regulares para mantener una altura adecuada y un aspecto cuidado y homogéneo.</p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: '82fb4bf1-bb7e-47a6-8159-733fc096d978',
              word: 'Álgebra',
              acentuacion: 'Esdrújula',
              image: 'Álgebra.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Sustantivo femenino que designa una rama de las matemáticas que estudia las estructuras, relaciones y cantidades abstractas, utilizando símbolos y letras para representar variables y constantes y operaciones matemáticas para establecer las relaciones entre ellas. </p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: 'd8a21ed2-3661-4168-b0b9-f730463fd15b',
              word: 'Sábado',
              acentuacion: 'Esdrújula',
              image: 'Sábado.png',
              audio: '',
              significado:
                '<p style="font-size:16px">El séptimo día de la semana, según el calendario gregoriano.Es un día de descanso para muchas personas y se celebra en diferentes formas en distintas culturas y religiones.</p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
            {
              uuid: '7675a74e-de10-4fd5-bd24-6662c1b98424',
              word: 'Sofá',
              acentuacion: 'Aguda',
              image: 'Sofá.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Un mueble cómodo y acolchado diseñado para sentarse o recostarse en él. Suele estar compuesto por un asiento amplio, respaldo y brazos, y puede estar tapizado con distintos materiales como tela, cuero o vinilo. </p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
            {
              uuid: '583200ce-e609-4913-b597-3cd3654ce721',
              word: 'Hospital',
              acentuacion: 'Aguda',
              image: 'Hospital.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Establecimiento público o privado destinado al diagnóstico, tratamiento y cuidado de los enfermos y heridos.<br/><br/>Lugar donde se realizan investigaciones, prácticas y enseñanza de la medicina.</p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '6da1d319-9239-410b-b5eb-7ab713ec748c',
              word: 'Lámpara',
              acentuacion: 'Esdrújula',
              image: 'Lámpara.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Un objeto diseñado para producir luz artificial mediante el uso de una fuente de energía.<br/><br/>Generalmente,tiene una estructura que soporta la fuente de luz, así como un dispositivo para encender y apagar la luz.</p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
            {
              uuid: '87a37c24-44b8-4078-9420-a620dd70968f',
              word: 'Ángulo',
              acentuacion: 'Esdrújula',
              image: 'Ángulo.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Se define como la "figura formada por dos líneas o dos superficies que se cortan o se unen en un punto". En geometría, es una medida de la separación entre dos líneas o planos, y se expresa en grados o en radianes. </p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
            {
              uuid: '7f6e260a-83af-482a-8547-ce41305772d7',
              word: 'Héroe',
              acentuacion: 'Esdrújula',
              image: 'Héroe.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Es una persona que se destaca por su valentía, coraje o acciones notables en situaciones difíciles o peligrosas. <br/><br/>También puede referirse a una figura mítica o legendaria con habilidades y hazañas extraordinarias. </p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '97674d44-9730-438e-a0c7-0bd5ae4ed7f3',
              word: 'Reloj',
              acentuacion: 'Aguda',
              image: 'Reloj.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Instrumento para medir el tiempo, formado por una máquina que produce movimientos regulares y continuos, generalmente mecánicos o electrónicos, que hacen avanzar una serie de agujas o indicadores sobre una esfera graduada o una pantalla digital.</p> <small> <i>Acentuación :  Aguda<i> </small>',
            },
            {
              uuid: 'fa74eb8f-ae07-42d1-8f5c-68cd3a6c7b6f',
              word: 'Martes',
              acentuacion: 'Grave',
              image: 'Martes.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Es el segundo día de la semana en el calendario gregoriano, que se usa en la mayoría de los países del mundo. <br/><br/> Es el día que sigue al lunes y precede al miércoles. </p> <small> <i>Acentuación :  Grave<i> </small>',
            },
            {
              uuid: '5ce5a544-eb60-407a-80f3-fd01bcbca8dc',
              word: 'Mágico',
              acentuacion: 'Esdrújula',
              image: 'Mágico.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Adjetivo que se utiliza para describir algo relacionado con la magia, que tiene un carácter sobrenatural o que produce una gran admiración y asombro.<br/><br/>También puede referirse a algo que es encantador, maravilloso o sorprendente.</p> <small> <i>Acentuación :  Esdrújula<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: 'dbeba70b-cada-4f6c-bdb7-de1aa1b04241',
              word: 'Felizmente',
              acentuacion: 'Grave',
              image: 'Felizmente.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Es un adverbio que se utiliza para indicar que algo se realiza de manera agradable, placentera o con satisfacción. También puede usarse para expresar alegría o regocijo por alguna situación.</p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: '40f8372c-00f6-4bb5-a42a-10058df664b8',
              word: 'Canción',
              acentuacion: 'Aguda',
              image: 'Canción.png',
              audio: 'Canción.mp3',
              significado:
                '<p style="font-size:16px">Composición musical compuesta por una serie de sonidos que se organizan en un patrón rítmico y melódico y que generalmente están acompañados por letras que forman una poesía.</p> <small> <i>Acentuación : Aguda<i> </small>',
            },
            {
              uuid: '767b06d7-e94b-4051-b4cd-ab6e6b61d0f9',
              word: 'Ángel',
              acentuacion: 'Grave',
              image: 'Ángel.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Se refiere a un ser espiritual, celeste y benevolente.En sentido figurado, se puede utilizar para describir a una persona especialmente bondadosa, amable o protectora.</p> <small> <i>Acentuación : Grave<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '03cbb627-479c-476f-927e-07b08f11f00f',
              word: 'Cárcel',
              acentuacion: 'Grave',
              image: 'Cárcel.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Se refiere a un lugar donde se encierra a las personas que han sido condenadas por un delito, para cumplir una pena privativa de libertad. Es una institución pública encargada de la custodia y control de los presos. </p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: '9307faac-1ba3-4d0b-a0aa-cf1e4e8ee331',
              word: 'Anillo',
              acentuacion: 'Grave',
              image: 'Anillo.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Es una pieza de joyería que se usa en el dedo. Puede ser de diferentes materiales como oro, plata, platino, acero inoxidable, entre otros.<br/><br/>Suelen tener formas circulares, pero pueden variar en su diseño, como tener piedras preciosas o diseños grabados.</p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: 'd065a21c-55ad-4ff0-b999-046bb4d52fab',
              word: 'Público',
              acentuacion: 'Esdrújula',
              image: 'Público.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Se refiere a algo que es accesible o visible para cualquier persona, o que pertenece o está destinado a toda la sociedad.<br/><br/>También puede referirse a un conjunto de personas que asisten a un evento o función, como una audiencia.</p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: 'b4f0a8b8-caa3-4f63-864f-42be1973030c',
              word: 'Cama',
              acentuacion: 'Grave',
              image: 'Cama.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Se refiere a un mueble diseñado para dormir o descansar. Consiste en un marco de madera o metal con una base plana, generalmente hecha de listones o resortes, y una superficie acolchada para proporcionar comodidad al usuario. </p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: '268efff0-c66e-47f7-80f5-5917ab4e77b7',
              word: 'Bolígrafo',
              acentuacion: 'Esdrújula',
              image: 'Bolígrafo.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Es un instrumento de escritura que utiliza tinta en lugar de grafito para crear marcas en el papel u otras superficies. <br/><br/>Consiste en un tubo de plástico o metal con una punta afilada en un extremo, que contiene un cartucho de tinta en el interior. </p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
            {
              uuid: 'c107540c-f2e0-4292-ac08-7441bfeb4ae1',
              word: 'Máximo',
              acentuacion: 'Esdrújula',
              image: 'Máximo.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Es un adjetivo que significa la cantidad más alta o el grado más alto que se puede alcanzar.<br/><br/>También se puede utilizar como un sustantivo para referirse a la cantidad más alta permitida o la mayor cantidad permitida.</p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '9366bdf7-2451-455e-9e5d-e10049c1d958',
              word: 'Difícil',
              acentuacion: 'Grave',
              image: 'Difícil.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Es un adjetivo que se utiliza para describir algo que presenta dificultad, que no es fácil de hacer, entender o resolver.<br/><br/> También se puede utilizar para describir a una persona que es complicada o difícil de tratar o entender.</p> <small> <i>Acentuación : Grave<i> </small>',
            },
            {
              uuid: '3735ca43-a08c-4224-9dfb-79808b133fab',
              word: 'Avión',
              acentuacion: 'Aguda',
              image: 'Avión.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Es una aeronave de ala fija, propulsada por uno o varios motores, capaz de sustentarse y desplazarse en el aire de forma controlada, y diseñada para transportar personas, animales o carga de un lugar a otro.</p> <small> <i>Acentuación : Aguda<i> </small>',
            },
            {
              uuid: 'b8c97da9-8f10-4cae-bd8a-f61cc4007581',
              word: 'Página',
              acentuacion: 'Esdrújula',
              image: 'Página.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Se refiere a una de las hojas de un libro, revista o documento, generalmente numerada y que contiene texto e imágenes. También puede referirse a un sitio web en Internet o a una superficie en blanco de un cuaderno, diario u otro tipo de bloc de notas en la que se pueden escribir notas o dibujos. </p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: '1cf69fc3-d381-47f7-9d19-0ac1f7300dfc',
              word: 'País',
              acentuacion: 'Aguda',
              image: 'País.png',
              audio: '',
              significado:
                '<p style="font-size:16px"><b>Territorio o nación:</b> se refiere a una región o territorio que está delimitado por fronteras políticas y administrativas, y que está bajo la soberanía de un Estado. <br/><br/><b>Gente o población:</b> también puede utilizarse para referirse al conjunto de personas que habitan un determinado territorio o nación. </p> <small> <i>Acentuación : Aguda<i> </small>',
            },
            {
              uuid: '9ebe89bd-1988-4162-8827-84ff05c2d048',
              word: 'Pálido',
              acentuacion: 'Esdrújula',
              image: 'Pálido.jpg',
              audio: '',
              significado:
                '<p style="font-size:16px">Es un adjetivo que describe algo que tiene un color muy claro, sin mucho brillo o intensidad. También puede referirse a una persona que tiene la piel con un tono blanquecino, generalmente debido a la falta de sol o a una enfermedad.</p> <small> <i>Acentuación : Esdrújula<i> </small>',
            },
            {
              uuid: 'e3445d92-7526-41c1-9792-645faf434c1b',
              word: 'Menú',
              acentuacion: 'Aguda',
              image: 'Menú.png',
              audio: '',
              significado:
                '<p style="font-size:16px">Se refiere a una lista o conjunto de opciones de comida o bebida que se ofrecen en un restaurante, bar u otro lugar de servicio de alimentos y bebidas.<br/><br/>También puede referirse a una lista de opciones o comandos que aparecen en una pantalla de computadora o dispositivo electrónico.</p> <small> <i>Acentuación : Aguda<i> </small>',
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
