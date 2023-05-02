'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'StrategyRead',
      [
        {
          strategy_id: 3,
          type: 'AGES',
          content: JSON.stringify([
            {
              uuid: 'fdd82da1-88ac-4994-b744-36v771676f72',
              word: 'Acúmulo ',
              meaning: 'Acúmulo ',
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
