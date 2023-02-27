'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Theme',
      [
        {
          name: 'Agudas, graves, esdrújulas y sobresdrújulas',
          description: 'Los cuatro tipos de palabras que determinan la acentuación',
        },
        {
          name: 'Palabras tónicas y átonas',
          description: 'Cómo se pronuncian y escriben las palabras que tienen acento',
        },
        {
          name: 'Palabras tritónicas',
          description: 'La situación de su sílaba tónica varía y cambia el significado',
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Theme', null, {})
  },
}
