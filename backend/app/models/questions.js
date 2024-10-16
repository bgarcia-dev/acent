'use strict'
const{
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Questions extends Model {
        /**
        * Helper method for defining associations.
        * This method is not a part of Sequelize lifecycle.
        * The `models/index` file will call this method automatically.
        */
        static associate(models) {
            // define association here
        }
    }
    Questions.init({
        question: DataTypes.STRING,
        correct_answer: DataTypes.STRING,
        wrong_answer1: DataTypes.STRING,
        wrong_answer2: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Questions',
        tableName: 'Questions',
        underscored: true,
    });
    return Questions;
};