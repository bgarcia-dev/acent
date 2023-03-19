'use strict'
/** README
 * Guarda la fuente de origen del material teórico
 */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SourceOrigin', {
      theoretical_material_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      source_origin: {
        type: Sequelize.STRING,
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
        defaultValue: Sequelize.fn('NOW'),
        comment: 'Fecha de ultima actualización del material teórico',
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
    // Llaves foráneas
    await queryInterface.addConstraint('SourceOrigin', {
      type: 'FOREIGN KEY',
      fields: ['theoretical_material_id'],
      references: {
        table: 'TheoreticalMaterial',
        field: 'id',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SourceOrigin')
  },
}
