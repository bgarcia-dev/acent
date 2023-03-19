/** README
 * Guarda la fuente de origen del material teórico
 */
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class SourceOrigin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SourceOrigin.belongsTo(models.TheoreticalMaterial, {
        foreignKey: 'theoretical_material_id',
        as: 'TheoreticalMaterial',
        targetKey: 'id',
        useJunctionTable: false,
      })
    }
  }
  SourceOrigin.init(
    {
      theoretical_material_id: DataTypes.INTEGER,
      source_origin: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'SourceOrigin',
      modelName: 'SourceOrigin',
      underscored: true,
      paranoid: true,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
    },
  )
  return SourceOrigin
}
