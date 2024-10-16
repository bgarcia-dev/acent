'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Questions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            question: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            correct_answer: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            wrong_answer1: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            wrong_answer2: {
                type: Sequelize.STRING(200),
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
        await queryInterface.dropTable('Questions');
    }
}