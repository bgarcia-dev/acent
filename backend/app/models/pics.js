'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PicsWords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PicsWords.init({
    word: DataTypes.STRING,
    image_1: DataTypes.STRING,
    image_2: DataTypes.STRING,
    image_3: DataTypes.STRING,
    image_4: DataTypes.STRING,
    clue: DataTypes.STRING,
    level: DataTypes.INTEGER
  },{
    sequelize,
    modelName: 'PicsWords',
    tableName: 'PicsWords',
    underscored: true
  });
  return PicsWords;
};
