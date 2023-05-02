'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StrategyRelationship', {
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
      type: {
        type: Sequelize.STRING(15),
        allowNull: false,
        comment: 'Agrupación de temas para la estrategia (AGES, TonicaAtona, Tritonica)',
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
    // Llaves foráneas
    await queryInterface.addConstraint('StrategyRelationship', {
      type: 'FOREIGN KEY',
      fields: ['strategy_id'],
      references: {
        table: 'Strategy',
        field: 'id',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StrategyRelationship')
  },
}
