'use strict'
const { StrategyRelationship } = require('../../models')
const sequelize = require('sequelize')

class StrategyRelationshipController {
  static elements = async (req, res, next) => {
    try {
      const { group } = req.params
      const condition = group ? { type: group } : {}

      const data = await StrategyRelationship.findAll({
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

module.exports = StrategyRelationshipController
