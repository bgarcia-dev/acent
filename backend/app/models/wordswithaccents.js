'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WordsWithAccents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WordsWithAccents.init({
    word_no_accent: DataTypes.STRING,
    word_with_accent: DataTypes.STRING,
    difficulty_level: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'WordsWithAccents',
    tableName: 'WordsWithAccents',
    underscored: true,
  });
  return WordsWithAccents;
};