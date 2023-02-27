'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Text', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      difficulty_level: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      multimedia: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      answer: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      totalWords: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pair: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      strategy_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.addConstraint('Text', {
      type: 'FOREIGN KEY',
      fields: ['strategy_id'],
      references: {
        table: 'Strategy',
        field: 'id',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Text')
  },
}
