'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Word', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      pair: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      meaning: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      strategy_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.addConstraint('Word', {
      type: 'FOREIGN KEY',
      fields: ['strategy_id'],
      references: {
        table: 'Strategy',
        field: 'id',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Word')
  },
}
