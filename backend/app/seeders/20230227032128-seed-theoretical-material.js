'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'TheoreticalMaterial',
      [
        {
          name: 'Palabras agudas',
          source: `
          {
            title: '¿Como reconocer palabras agudas?'
            paragraph: [
              'En español, una palabra es aguda si su sílaba tónica es la última sílaba. La sílaba tónica es la sílaba que se pronuncia con mayor fuerza en una palabra.',
              'Para reconocer si una palabra es aguda, es necesario identificar cuál es su última sílaba y determinar si esa sílaba es la sílaba tónica. Para ello, es necesario conocer las reglas de acentuación del idioma español.',
              'Las palabras agudas en español llevan acento ortográfico (tilde) en la última sílaba cuando terminan en una vocal, en "n" o en "s". Por ejemplo:',
              '*Canción *Sofá *Perú',
            ]
          }
          `,
          theme_id: 1,
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TheoreticalMaterial', null, {})
  },
}
