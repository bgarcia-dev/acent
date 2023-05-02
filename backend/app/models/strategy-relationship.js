'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class StrategyRelationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StrategyRelationship.belongsTo(models.Strategy, {
        foreignKey: 'strategy_id',
        as: 'Strategy',
        targetKey: 'id',
        useJunctionTable: false,
      })
    }
  }
  StrategyRelationship.init(
    {
      content: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('content'))
        },
      },
      strategy_id: DataTypes.INTEGER,
      total_words: DataTypes.INTEGER,
      image_path: DataTypes.STRING,
      type: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'StrategyRelationship',
      modelName: 'StrategyRelationship',
      underscored: true,
      paranoid: true,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
    },
  )
  return StrategyRelationship
}
