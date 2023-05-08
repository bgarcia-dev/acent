'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'StrategyRelationship',
      [
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: '76b47e4b-71aa-4db6-9089-9183b87abdd4',
              word: 'Tranvía',
              acentuacion: 'Tónica',
              image: 'Tranvía.jpg',
              audio: 'Tranvía.mp3',
              significado:
                '<p style="font-size:16px"> Vehículo de transporte colectivo que circula sobre raíles, impulsado por electricidad o vapor y que se desplaza por el centro de la calle, con capacidad para numerosos pasajeros.</p> <small> <i>  Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: 'eb342409-d0da-412e-8910-e52d68a8a472',
              word: 'Redes',
              acentuacion: 'átona',
              image: 'redes.jpg',
              audio: 'redes.mp3',
              significado:
                '<p style="font-size:16px"> Una malla fabricada con hilos entrelazados de material resistente, utilizada para capturar animales.<br/><br/>Sustantivo plural que hace referencia a un conjunto de elementos interconectados entre sí con un fin determinado.</p> <small> <i>  Última silaba <b>átona</b><i> </small>',
            },
            {
              uuid: '9039b832-41e7-4856-b2a7-d8827164c809',
              word: 'Lunar',
              acentuacion: 'Tónica',
              image: 'Lunar.jpg',
              audio: 'Lunar.mp3',
              significado:
                '<p style="font-size:16px"> Pequeña mancha oscura en la piel que se diferencia del color circundante y que puede ser congénita o aparecer en algún momento de la vida. </p> <small> <i>  Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: 'a8d334df-4e3c-4210-8280-f5850d34cb34',
              word: 'Partir',
              acentuacion: 'Átona',
              image: 'Partir.jpg',
              audio: 'Partir.mp3',
              significado:
                '<p style="font-size:16px">Verbo transitivo que se refiere a separar en dos o más partes algo que antes formaba una unidad.<br/><br/>Manera intransitiva para indicar la acción de salir de un lugar o de comenzar un viaje. </p> <small> <i>  Penúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: 'e222a61a-d6b4-4a41-a0f8-54d10f0b410f',
              word: 'Canción',
              acentuacion: 'Tónica',
              image: 'Canción.png',
              audio: 'Canción.mp3',
              significado:
                '<p style="font-size:16px">Composición musical compuesta por una serie de sonidos que se organizan en un patrón rítmico y melódico y que generalmente están acompañados por letras que forman una poesía.</p> <small> <i>  Última silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '676aa500-ff5a-4f40-a41a-71e807186d0e',
              word: 'Trueno',
              acentuacion: 'Átona',
              image: 'Trueno.jpg',
              audio: 'Trueno.mp3',
              significado:
                '<p style="font-size:16px">Se refiere al ruido fuerte y estruendoso producido por una descarga eléctrica en la atmósfera durante una tormenta, que suele ir acompañado de un destello luminoso llamado relámpago.</p> <small> <i>  Última silaba <b>átona</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: 'be75aef0-3f51-42fb-ac8f-a66714427205',
              word: 'Súbito',
              acentuacion: 'Tónica',
              image: 'Súbito.jpg',
              audio: 'Súbito.mp3',
              significado:
                '<p style="font-size:16px">Adjetivo que describe algo que sucede o aparece de manera repentina e inesperada, sin previo aviso o advertencia.<br/><br/>Se refiere a algo que ocurre en un corto periodo de tiempo, sin que haya una preparación previa para ello.</p> <small> <i>  Antepenúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '5826610b-e2cc-4008-a28b-6494923378b4',
              word: 'Duración',
              acentuacion: 'Átona',
              image: 'Duración.jpg',
              audio: 'Duración.mp3',
              significado:
                '<p style="font-size:16px">Es la cantidad de tiempo durante el cual algo ocurre o existe.<br/><br/>Puede ser medida en segundos, minutos, horas, días, semanas, meses o años, dependiendo del contexto en el que se utilice.</p> <small> <i>  Penúltima y antepenúltima silabas <b>átonas</b><i> </small>',
            },
            {
              uuid: 'a9d464ee-73a0-4b86-8e5c-862c31fe0aed',
              word: 'Estar',
              acentuacion: 'Tónica',
              image: 'Estar.jpg',
              audio: 'Estar.mp3',
              significado:
                '<p style="font-size:16px">Es un verbo en infinitivo que se refiere a la acción de encontrarse, hallarse o existir en un lugar o situación determinada en un momento específico.</p> <small> <i>  Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: '6c2cdd6a-8268-4bcb-9d25-4ecc1371eda6',
              word: 'Cúpula',
              acentuacion: 'Átona',
              image: 'Cúpula.jpg',
              audio: 'Cúpula.mp3',
              significado:
                '<p style="font-size:16px">Es una estructura arquitectónica en forma de bóveda hemisférica o semiesférica que se utiliza para cubrir grandes espacios.Puede estar construida en diversos materiales, como ladrillo, piedra, madera o vidrio, y se utiliza en edificios religiosos, gubernamentales, culturales o comerciales. </p> <small> <i>  Última y penúltima silabas <b>átonas</b><i> </small>',
            },
            {
              uuid: 'c651459c-258d-4193-a210-a8584e22d55e',
              word: 'Sencillo',
              acentuacion: 'Tónica',
              image: 'Sencillo.jpg',
              audio: 'Sencillo.mp3',
              significado:
                '<p style="font-size:16px">Puede referirse a algo que es modesto o simple en diseño o apariencia. Puede utilizarse para describir una tarea o actividad que no es complicada o requiere poco esfuerzo. </p> <small> <i>  Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '0f2e45a7-b001-4b6b-b4df-4ea2914a5a12',
              word: 'Sitio',
              acentuacion: 'Átona',
              image: 'Sitio.jpg',
              audio: 'Sitio.mp3',
              significado:
                '<p style="font-size:16px">Espacio o lugar que ocupa algo o alguien.<br/><br/>Espacio urbano que forma una unidad perceptible y significativa, dotado de ciertas características funcionales, estéticas y culturales.</p> <small> <i>  Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: '6dfc6c54-5a1d-4005-b8d7-c3e7e851b010',
              word: 'Palanca',
              acentuacion: 'Tónica',
              image: 'Palanca.jpg',
              audio: 'Palanca.mp3',
              significado:
                '<p style="font-size:16px">Una barra rígida que se utiliza para levantar o mover objetos pesados al aplicar una fuerza en su extremo libre.<br/><br/>La palanca se compone de tres elementos: el punto de apoyo o fulcro, la fuerza aplicada en un extremo y la carga en el otro extremo.</p> <small> <i>Penúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: 'ff988110-b3a0-43ee-9dce-9bbecec6797a',
              word: 'Además',
              acentuacion: 'Átona',
              image: 'Además.png',
              audio: 'Además.mp3',
              significado:
                '<p style="font-size:16px">Una conjunción que se utiliza para indicar que se va a añadir información o una idea adicional a lo que ya se ha mencionado. </p> <small> <i>Penúltima y antepenúltima silabas <b>tónicas</b><i> </small>',
            },
            {
              uuid: '1c82e9da-0cec-4cc3-ad18-6fe1972345b6',
              word: 'Conseguir',
              acentuacion: 'Tónica',
              image: 'Conseguir.jpg',
              audio: 'Conseguir.mp3',
              significado:
                '<p style="font-size:16px">Es un verbo que significa lograr, obtener o adquirir algo que se desea o se necesita.<br/><br/> Es un verbo que denota acción y puede ser usado en diferentes contextos y situaciones.</p> <small> <i>Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: 'faa9e54b-d770-45b0-b12b-19d759acffc4',
              word: 'Escupir',
              acentuacion: 'Átona',
              image: 'Escupir.jpg',
              audio: 'Escupir.mp3',
              significado:
                '<p style="font-size:16px">Verbo transitivo que se refiere al acto de expulsar la saliva o los fluidos del tracto respiratorio de la boca </p> <small> <i>Penúltima y antepenúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: 'f350084a-4a64-4880-af49-d14657bbe4be',
              word: 'Destrucción',
              acentuacion: 'Tónica',
              image: 'Destrucción.jpg',
              audio: 'Destrucción.mp3',
              significado:
                '<p style="font-size:16px">Es la acción y efecto de romper, es decir, arruinar, aniquilar o causar un daño grave y generalmente irreversible a algo o alguien</p> <small> <i>Penúltima y antepenúltima silabas <b>tónicas</b><i> </small>',
            },
            {
              uuid: '2b49909c-92dc-4d2d-99fc-e0c167121987',
              word: 'Entrevistar',
              acentuacion: 'Átona',
              image: 'Entrevistar.jpg',
              audio: 'Entrevistar.mp3',
              significado:
                '<p style="font-size:16px">Se refiere a la acción de hacerle preguntas a alguien para obtener información o realizar una evaluación. En general, se trata de una conversación formal que se realiza con un propósito específico, como la obtención de información para un reportaje o para un trabajo.</p> <small> <i>Penúltima, antepenúltima y antes de la antepenúltima son silabas <b>átonas</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: '4d7af94f-0124-46a3-8e78-68f87e305991',
              word: 'Lucrativo',
              acentuacion: 'Tónica',
              image: 'Lucrativo.jpg',
              audio: 'Lucrativo.mp3',
              significado:
                '<p style="font-size:16px">Adjetivo que se utiliza para describir algo que es muy rentable o que produce beneficios económicos significativos. También puede referirse a algo que es productivo o fructífero en general. </p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '8d9053ab-f521-4432-ae7f-182f850dd646',
              word: 'Síntomas',
              acentuacion: 'Átona',
              image: 'Síntomas.jpg',
              audio: 'Síntomas.mp3',
              significado:
                '<p style="font-size:16px">Cualquier sensación o manifestación subjetiva que experimenta una persona y que es un signo de una enfermedad o trastorno. </p> <small> <i>Última y penúltima silabas <b>átonas</b><i> </small>',
            },
            {
              uuid: '98eb305d-7838-4e58-ad2a-a1bcbf04a2a6',
              word: 'Cuando',
              acentuacion: 'Tónica',
              image: 'Cuando.png',
              audio: 'Cuando.mp3',
              significado:
                '<p style="font-size:16px">Conjunción temporal que se utiliza para introducir una frase subordinada que indica el momento en que se realiza la acción expresada en la frase principal. </p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: '60be1d2d-e2ff-41fd-97ef-ccb00a14b3bc',
              word: 'Poseer',
              acentuacion: 'Átona',
              image: 'Poseer.jpg',
              audio: 'Poseer.mp3',
              significado:
                '<p style="font-size:16px">Es un verbo transitivo que se refiere a tener en posesión, dominio o control algo tangible o intangible, ya sea un objeto, una propiedad, una cualidad, una habilidad, un conocimiento, entre otros. </p> <small> <i>Penúltima y antepenúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: 'eddbb55b-43b5-489b-9dc0-442398dc6f9b',
              word: 'Lectura',
              acentuacion: 'Tónica',
              image: 'Lectura.jpg',
              audio: 'Lectura.mp3',
              significado:
                '<p style="font-size:16px">Es la acción de interpretar un texto mediante la comprensión y decodificación de los signos que lo componen. Implica una interacción entre el lector y el texto, donde el lector busca comprender el mensaje del autor y desarrollar su propia interpretación.</p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '8587a82a-af34-40d5-9fa8-771fc520c83d',
              word: 'Hacer',
              acentuacion: 'Átona',
              image: 'Hacer.jpg',
              audio: 'Hacer.mp3',
              significado:
                '<p style="font-size:16px">Es un verbo transitivo que se utiliza para expresar la acción de realizar o ejecutar alguna cosa. También se utiliza como verbo auxiliar en la construcción de algunos tiempos verbales, como el pretérito perfecto compuesto, el futuro simple y el futuro compuesto.</p> <small> <i>Penúltima silaba <b>átona</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: '062aec80-67e0-4cc8-8475-10c95ffd57eb',
              word: 'Fortaleza',
              acentuacion: 'Tónica',
              image: 'Fortaleza.jpg',
              audio: 'Fortaleza.mp3',
              significado:
                '<p style="font-size:16px">Referencia a la capacidad de una persona para resistir o superar las dificultades, o a un lugar fortificado utilizado para la defensa militar. </p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: 'f4174b22-4633-4b97-ab1c-66acb9cc446b',
              word: 'Película',
              acentuacion: 'Átona',
              image: 'Película.jpg',
              audio: 'Película.mp3',
              significado:
                '<p style="font-size:16px">Una obra cinematográfica que se proyecta en una pantalla. Se trata de un medio de comunicación visual que utiliza imágenes en movimiento, sonido y música para contar una historia.</p> <small> <i>Última, penúltima y antes de la antepenúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: 'e4f839f6-77e4-4e67-9fa8-34d1e709d66e',
              word: 'Hogar',
              acentuacion: 'Tónica',
              image: 'Hogar.jpg',
              audio: 'Hogar.mp3',
              significado:
                '<p style="font-size:16px">Se refiere al lugar donde vive una persona o una familia, es decir, su residencia.También puede referirse al ambiente familiar y acogedor de un lugar o a la sensación de pertenencia y comodidad que se siente en ese lugar. </p> <small> <i>Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: 'ada10dc2-9046-4b71-b896-afc50c4674c6',
              word: 'Talento',
              acentuacion: 'Átona',
              image: 'Talento.png',
              audio: 'Talento.mp3',
              significado:
                '<p style="font-size:16px">Se refiere a una habilidad o aptitud especial que tiene una persona para hacer algo, y que se considera que es innata o natural en ella. <br/><br/>También puede hacer referencia a la unidad de medida de peso y valor utilizada en la antigüedad.</p> <small> <i>Última y antepenúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: 'c8fb79b5-5fb3-4a83-8165-1fab2359d658',
              word: 'Vino',
              acentuacion: 'Tónica',
              image: 'Vino.jpg',
              audio: 'vino.mp3',
              significado:
                '<p style="font-size:16px">Una bebida alcohólica que se obtiene por la fermentación de la uva. Se elabora a partir de la variedad de uva llamada Vitis vinifera y su producción es muy valorada en diversas culturas del mundo.</p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '20bb4118-d023-4907-b7b3-8848c8c2d50e',
              word: 'Misa',
              acentuacion: 'Átona',
              image: 'Misa.jpg',
              audio: 'Misa.mp3',
              significado:
                '<p style="font-size:16px">Una reunión o convocatoria política o social que se lleva a cabo, se relaciona con la idea de una ceremonia o ritual en la que se reúne una comunidad para realizar un acto en común</p> <small> <i>Última silaba <b>átona</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: 'd09f81b9-9233-4dc3-a2e8-00fede2de03c',
              word: 'Pastores',
              acentuacion: 'Tónica',
              image: 'Pastores.jpg',
              audio: 'Pastores.mp3',
              significado:
                '<p style="font-size:16px">Se refiere a aquellos que se dedican al cuidado de ganado, especialmente de ovejas.</p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: '74d0dc11-c67b-432d-b1e3-2d5ba84b1770',
              word: 'España',
              acentuacion: 'Átona',
              image: 'España.jpg',
              audio: 'España.mp3',
              significado:
                '<p style="font-size:16px">Es un país situado en la Península Ibérica, en el suroeste de Europa. Su capital es Madrid y su forma de gobierno es una monarquía parlamentaria.</p> <small> <i>Última y antepenúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: '6030d54e-1d02-4217-bc3c-41cc97420e61',
              word: 'Recriminación',
              acentuacion: 'Tónica',
              image: 'Recriminación.jpg',
              audio: 'Recriminación.mp3',
              significado:
                '<p style="font-size:16px">Es una acusación o censura que se hace a alguien por una acción o conducta considerada negativa o inapropiada. Es una expresión de desaprobación y puede ser verbal o no verbal, directa o indirecta. </p> <small> <i>Última silaba <b>tónica</b><i> </small>',
            },
          ]),
        },
        {
          strategy_id: 3,
          type: 'TonicaAtona',
          content: JSON.stringify([
            {
              uuid: 'fc929937-ed37-45fb-af8e-4846962e41ab',
              word: 'Nada',
              acentuacion: 'Tónica',
              image: 'Nada.png',
              audio: 'Nada.mp3',
              significado:
                '<p style="font-size:16px">La ausencia de algo o a la falta de valor o importancia de algo. También puede ser utilizado como respuesta negativa o como sinónimo de "ninguna cosa". </p> <small> <i>Penúltima silaba <b>tónica</b><i> </small>',
            },
            {
              uuid: 'f44cd4b5-d055-4065-a531-149049f90fb3',
              word: 'Manos',
              acentuacion: 'Átona',
              image: 'Manos.png',
              audio: 'Manos.mp3',
              significado:
                '<p style="font-size:16px">Son extremidades del cuerpo humano que se encuentran en los extremos de los brazos y que están diseñadas para agarrar, manipular y sostener objetos. Están formadas por un conjunto de huesos, músculos, ligamentos y tendones que les proporcionan movilidad y fuerza. </p> <small> <i>Última y antepenúltima silaba <b>átona</b><i> </small>',
            },
            {
              uuid: '37c42963-f953-4197-875a-f5c500a04dec',
              word: 'Mostrar',
              acentuacion: 'Tónica',
              image: 'Mostrar.jpg',
              audio: 'Mostrar.mp3',
              significado:
                '<p style="font-size:16px">Verbo transitivo que significa presentar, enseñar o exhibir algo a alguien, generalmente con el propósito de que esa persona lo vea o lo conozca. </p> <small> <i>Última silaba <b>tónica</b><i> </small>',
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
