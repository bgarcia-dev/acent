'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PicsWords', [
      {
        word: 'baúl',
        image_1: 'baul1.jpg',
        image_2: 'baul2.avif',
        image_3: 'baul3.jpg',
        image_4: 'baul4.jpg',
        clue: 'Objeto, usualmente de madera, usado para conservar objetos.',
        accent_type: 'agudas',
        level: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'papel',
        image_1: 'papel1.jpg',
        image_2: 'papel2.jpg',
        image_3: 'papel3.avif',
        image_4: 'papel4.png',
        clue: 'Delgado y plano, guarda secretos en blanco.',
        accent_type: 'agudas',
        level: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'león',
        image_1: 'leon1.jpg',
        image_2: 'leon2.avif',
        image_3: 'leon3.jpg',
        image_4: 'leon4.png',
        clue: 'Melena dorada, rey de la sabana.',
        accent_type: 'agudas',
        level: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'maní',
        image_1: 'mani1.jpg',
        image_2: 'mani2.avif',
        image_3: 'mani3.jpg',
        image_4: 'mani4.jpg',
        clue: 'Pequeño tesoro en cáscara crujiente.',
        accent_type: 'agudas',
        level: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'limón',
        image_1: 'limon1.png',
        image_2: 'limon2.avif',
        image_3: 'limon3.jpeg',
        image_4: 'limon4.jpg',
        clue: 'Cítrico amarillo, ácido y refrescante.',
        accent_type: 'agudas',
        level: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Palabras tónicas y átonas
      {
        word: 'mesa',
        image_1: 'mesa1.avif',
        image_2: 'mesa2.jpg',
        image_3: 'mesa3.jpg',
        image_4: 'mesa4.jpg',
        clue: 'Mueble con una superficie plana sostenida por patas',
        accent_type: 'tonicas',
        level: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'rápido',
        image_1: 'rapido1.jpg',
        image_2: 'rapido2.avif',
        image_3: 'rapido3.avif',
        image_4: 'rapido4.png',
        clue: 'Que se mueve o sucede a gran velocidad',
        accent_type: 'tonicas',
        level: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'lápiz',
        image_1: 'lapiz1.png',
        image_2: 'lapiz2.avif',
        image_3: 'lapiz3.webp',
        image_4: 'lapiz4.avif',
        clue: 'Instrumento de escritura con mina de grafito',
        accent_type: 'tonicas',
        level: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'café',
        image_1: 'cafe1.jpeg',
        image_2: 'cafe2.avif',
        image_3: 'cafe3.avif',
        image_4: 'cafe4.png',
        clue: 'Bebida aromática hecha de granos tostados y molidos',
        accent_type: 'tonicas',
        level: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'árbol',
        image_1: 'arbol1.avif',
        image_2: 'arbol2.png',
        image_3: 'arbol3.avif',
        image_4: 'arbol4.jpg',
        clue: 'Planta de tallo leñoso que se ramifica a cierta altura del suelo',
        accent_type: 'tonicas',
        level: 5,
        created_at: new Date(),
        updated_at: new Date()
      }, //Palabras tritonicas
      {
        word: 'cómpratelo',
        image_1: 'compratelo1.jpg',
        image_2: 'compratelo2.jpg',
        image_3: 'compratelo3.avif',
        image_4: 'compratelo4.avif',
        clue: 'Algo que alguien puede sugerirte hacer cuando quieres adquirir algo.',
        accent_type: 'tritonicas',
        level: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'permítaselo',
        image_1: 'permitaselo1.avif',
        image_2: 'permitaselo2.jpeg',
        image_3: 'permitaselo3.png',
        image_4: 'permitaselo4.png',
        clue: 'Lo que puedes decir cuando le das a alguien la aprobación para hacer algo.',
        accent_type: 'tritonicas',
        level: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'pregúntamelo',
        image_1: 'preguntamelo.jpg',
        image_2: 'preguntamelo2.jpg',
        image_3: 'preguntamelo3.avif',
        image_4: 'preguntamelo4.avif',
        clue: 'Lo que dices cuando alguien busca una respuesta que tú conoces.',
        accent_type: 'tritonicas',
        level: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'imagínatelo',
        image_1: 'imaginatelo1.avif',
        image_2: 'imaginatelo2.avif',
        image_3: 'imaginatelo3.avif',
        image_4: 'imaginatelo4.avif',
        clue: 'Lo que podrías decirle a alguien cuando necesita visualizar algo por sí mismo.',
        accent_type: 'tritonicas',
        level: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'devuélvemelo',
        image_1: 'devuelvemelo1.avif',
        image_2: 'devuelvemelo2.jpeg',
        image_3: 'devuelvemelo3.png',
        image_4: 'devuelvemelo4.jpeg',
        clue: 'Algo que puedes pedir cuando necesitas recuperar lo que prestaste.',
        accent_type: 'tritonicas',
        level: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PicsWords', null, {});
  }
};


/* 
{
        word: '',
        image_1: '',
        image_2: '',
        image_3: '',
        image_4: '',
        clue: '',
        accent_type: '',
        level: ,
        created_at: new Date(),
        updated_at: new Date()
      },
*/