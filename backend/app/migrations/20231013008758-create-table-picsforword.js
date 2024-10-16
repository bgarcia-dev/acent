'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PicsWords', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      word: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image_1: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image_2: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image_3: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image_4: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      clue: {
        type: Sequelize.STRING,
        allowNull: true
      },
      accent_type: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PicsWords');
  }
};
