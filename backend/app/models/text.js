'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Text extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Text.belongsTo(models.Strategy, {
        foreignKey: 'strategy_id',
        as: 'Strategy',
        targetKey: 'id',
        useJunctionTable: false,
      })
    }
  }
  Text.init(
    {
      content: DataTypes.STRING,
      strategy_id: DataTypes.INTEGER,
      total_words: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'Text',
      modelName: 'Text',
      underscored: true,
      paranoid: true,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
    },
  )
  return Text
}
