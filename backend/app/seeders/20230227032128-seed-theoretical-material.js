'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'TheoreticalMaterial',
      [
        {
          name: 'Palabras agudas',
          source:
            '<p class="text-justify">También llamadas oxítonas. Su sílaba tónica es la última y se <b>escriben con tilde cuando terminan en vocal</b> (mamá), <b>-n</b> (canción) o <b>-s</b> (jamás).</p>' +
            '<p class="text-justify">No se escribe sin tilde en en el resto de las terminaciones (<i>animal, señor, pared, cantar...</i>). Tampoco lleva tilde Si la <b>-s</b> va detrás de otra consonante (<i>debuts, robots</i>).</p>',
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
