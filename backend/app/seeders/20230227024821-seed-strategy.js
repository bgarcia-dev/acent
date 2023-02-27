'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Strategy',
      [
        {
          name: 'Relaciona imagen con su palabra',
          description:
            'Se emplea para que el usuario recuerde y asocie correctamente la palabra con su acentuación.',
          type: 'Juegos de memoria',
          difficulty_level: 'fácil',
          image: 'public/strategy/images/img01.jpg',
          multimedia: 'public/strategy/video/vid01.mp4',
          answer: null,
          totalWords: null,
          pair: null,
          theme_id: 1,
        },
        {
          name: 'Elige con cuidado',
          description:
            'El usuario puede elegir la opción correcta entre varias opciones de acentuación de una misma palabra.',
          type: 'Juegos de selección múltiple',
          difficulty_level: 'difícil',
          image: null,
          multimedia: null,
          answer: null,
          totalWords: 3,
          pair: null,
          theme_id: 1,
        },
        {
          name: 'Relaciona imagen con su palabra',
          description:
            'El usuario puede encontrar una palabra con su acentuación correcta en un grupo de palabras.',
          type: 'Juegos de búsqueda',
          difficulty_level: 'fácil',
          image: 'public/strategy/images/img05.png',
          multimedia: null,
          answer: null,
          totalWords: null,
          pair: null,
          theme_id: 2,
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Strategy', null, {})
  },
}
