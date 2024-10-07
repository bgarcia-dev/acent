'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WordsWithAccents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      word_no_accent: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      word_with_accent: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      difficulty_level: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      accent_type: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('WordsWithAccents');
  }
};
