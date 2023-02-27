'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Distraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Distraction.belongsTo(models.Strategy, {
        foreignKey: 'strategy_id',
        as: 'Strategy',
        targetKey: 'id',
        useJunctionTable: false,
      })
    }
  }
  Distraction.init(
    {
      content: DataTypes.STRING,
      strategy_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'Distraction',
      modelName: 'Distraction',
      underscored: true,
      paranoid: true,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
    },
  )
  return Distraction
}
