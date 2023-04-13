'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Strategy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Strategy.hasMany(models.Text, {
        foreignKey: 'strategy_id',
        as: 'Text',
        targetKey: 'id',
        useJunctionTable: false,
      })
      Strategy.hasMany(models.Distraction, {
        foreignKey: 'strategy_id',
        as: 'Distraction',
        targetKey: 'id',
        useJunctionTable: false,
      })
      Strategy.hasMany(models.Word, {
        foreignKey: 'strategy_id',
        as: 'Word',
        targetKey: 'id',
        useJunctionTable: false,
      })
    }
  }
  Strategy.init(
    {
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      name: DataTypes.STRING,
      difficulty_level: DataTypes.STRING,
      image: DataTypes.STRING,
      multimedia: DataTypes.STRING,
      answer: DataTypes.STRING,
      totalWords: DataTypes.INTEGER,
      pair: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'Strategy',
      modelName: 'Strategy',
      underscored: true,
      paranoid: true,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
    },
  )
  return Strategy
}
