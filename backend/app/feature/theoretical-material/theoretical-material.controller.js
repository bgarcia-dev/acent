'use strict'
const { Theme, TheoreticalMaterial } = require('../../models')
class TheoreticalMaterialController {
  static item = async (req, res, next) => {
    try {
      const themeQuery = req.params.theme || null
      const theme = await Theme.findOne({
        attributes: ['id', 'name'],
        include: [
          {
            attributes: ['id', 'name', 'resource', 'updated_at'],
            model: TheoreticalMaterial,
            required: true,
          },
        ],
        where: { name: themeQuery },
      })

      return res.status(200).json({ status: true, data: theme })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TheoreticalMaterialController
