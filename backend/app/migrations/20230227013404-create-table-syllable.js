'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Syllable', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      syllable: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      accentuation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      word_id: {
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
    await queryInterface.addConstraint('Syllable', {
      type: 'FOREIGN KEY',
      fields: ['word_id'],
      references: {
        table: 'Word',
        field: 'id',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Syllable')
  },
}
