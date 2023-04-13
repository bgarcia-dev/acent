'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StrategyRead', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      strategy_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_words: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      image_path: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: 'Imagen relacionada al texto',
      },
      // timeStamps
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StrategyRead')
  },
}
