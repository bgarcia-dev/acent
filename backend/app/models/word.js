'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Code
    }
  }
  Word.init(
    {
      type: DataTypes.STRING,
      pair: DataTypes.STRING,
      image: DataTypes.STRING,
      meaning: DataTypes.STRING,
      strategy_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'Word',
      modelName: 'Word',
      underscored: true,
      paranoid: true,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
    },
  )
  return Word
}
