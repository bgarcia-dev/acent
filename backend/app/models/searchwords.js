'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SearchWords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SearchWords.init({
    word: DataTypes.STRING,
    clue: DataTypes.STRING,
    level: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'SearchWords',
    tableName: 'SearchWords',
    underscored: true,
  });
  return SearchWords;
};