'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Syllable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Code
    }
  }
  Syllable.init(
    {
      syllable: DataTypes.STRING,
      accentuation: DataTypes.BOOLEAN,
      Syllable_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'Syllable',
      modelName: 'Syllable',
      underscored: true,
      paranoid: true,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
    },
  )
  return Syllable
}
