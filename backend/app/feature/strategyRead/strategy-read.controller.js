'use strict'
const { StrategyRead } = require('../../models')
const sequelize = require('sequelize')

class StrategyReadController {
  static elements = async (req, res, next) => {
    try {
      // TODO: poner distinción de grupo de temas a los que pertenece la lectura AGES. Tonica, Tritonica
      const data = await StrategyRead.findAll({
        order: sequelize.literal('RAND()'),
        limit: 3,
      })
      return res.status(200).json({ status: true, data })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = StrategyReadController
