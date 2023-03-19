'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Theme',
      [
        {
          name: 'Agudas',
          description:
            'Son palabras cuya sílaba tónica es la última. Llevan tilde si terminan en vocal, -n o -s.',
        },
        {
          name: 'Graves',
          description:
            'Son palabras cuya sílaba tónica es la penúltima. Llevan tilde si no terminan en vocal, -n o -s.',
        },
        {
          name: 'Esdrújulas',
          description: 'Son palabras cuya sílaba tónica es la antepenúltima. Todas llevan tilde.',
        },
        {
          name: 'Sobresdrújulas',
          description:
            'Son palabras cuya sílaba tónica es anterior a la antepenúltima. Todas llevan tilde.',
        },
        {
          name: 'Tónicas',
          description:
            'Son aquellas sílabas que se pronuncian con MAYOR fuerza y énfasis en una palabra.',
        },
        {
          name: 'Átonas',
          description:
            'Son aquellas sílabas que se pronuncian con MENOR fuerza y énfasis en una palabra.',
        },
        {
          name: 'Tritónicas',
          description: 'Son palabras de más de dos sílabas que tienen tres sílabas tónicas.',
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Theme', null, {})
  },
}
