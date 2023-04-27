/**
 * Enlaces de referencia
 * https://github.com/validatorjs/validator.js
 * https://express-validator.github.io/docs/
 * https://express-validator.github.io/docs/custom-error-messages.html
 */
const { check } = require('express-validator')
const { validateResult } = require('./validate_helper')

/**
 * Valida agrupaciones de temas definidos para el front
 */
const validateGroup = [
  check('group')
    .default(null)
    .customSanitizer((val, { req }) => {
      if (val == 'null') return null
      if (val == undefined) return null
      if (val == 'undefined') return null
      return val
    })
    .isString()
    .withMessage('group param must be a string')
    .trim()
    .bail()
    .isIn(['AGES', 'TonicaAtona', 'Tritonica'])
    .withMessage('Select valid theme [AGES,TonicaAtona,Tritonica]'),

  (req, res, next) => {
    validateResult(req, res, next)
  },
]

module.exports = {
  validateGroup,
}
