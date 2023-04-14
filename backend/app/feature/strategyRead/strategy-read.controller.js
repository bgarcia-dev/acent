'use strict'
const { StrategyRead } = require('../../models')
const sequelize = require('sequelize')

class StrategyReadController {
  static elements = async (req, res, next) => {
    try {
      const { group } = req.params
      const condition = group ? { group } : {}

      const data = await StrategyRead.findAll({
        where: condition,
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
