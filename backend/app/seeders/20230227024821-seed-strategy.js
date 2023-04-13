'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Strategy',
      [
        {
          name: 'Juegos de memoria',
          description:
            'Se emplea para que el usuario recuerde y asocie correctamente la palabra con su acentuación.',
        },
        {
          name: 'Juegos de selección múltiple',
          description:
            'El usuario puede elegir la opción correcta entre varias opciones de acentuación de una misma palabra.',
        },
        {
          name: 'Juegos de asociación',
          description: 'El usuario puede asociar correctamente una palabra con su significado.',
        },
        {
          name: 'Juegos de búsqueda',
          description:
            'El usuario puede encontrar una palabra con su acentuación correcta en un grupo de palabras.',
        },
        {
          name: 'Juegos de construcción de palabras',
          description:
            'El usuario puede construir correctamente una palabra a partir de sus sílabas y acentuarla adecuadamente.',
        },
        {
          name: 'Juegos de lectura',
          description: 'El usuario puede leer un texto y encontrar las palabras mal acentuadas.',
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Strategy', null, {})
  },
}
