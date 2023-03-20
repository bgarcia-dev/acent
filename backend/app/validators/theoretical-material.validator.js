/**
 * Enlaces de referencia
 * https://github.com/validatorjs/validator.js
 * https://express-validator.github.io/docs/
 * https://express-validator.github.io/docs/custom-error-messages.html
 */
const { check } = require('express-validator')
const { validateResult } = require('./validate_helper')

const validateTheme = [
  check('theme')
    .isString()
    .withMessage('theme param must be a string')
    .trim()
    .bail()
    .isIn(['Aguda', 'Grave (Llana)', 'Esdrújula', 'Sobresdrújula'])
    .withMessage('Select valid theme [Aguda, Grave (Llana),Esdrújula,Sobresdrújula]')
    .customSanitizer((val) => {
      let sanitizer = ''
      if (val == 'null') return null
      if (val == 'Aguda') sanitizer = 'Agudas'
      if (val == 'Grave (Llana)') sanitizer = 'Graves'
      if (val == 'Esdrújula') sanitizer = 'Esdrújulas'
      if (val == 'Sobresdrújula') sanitizer = 'Sobresdrújulas'

      return sanitizer
    }),

  (req, res, next) => {
    validateResult(req, res, next)
  },
]

/**
 * Valida agrupaciones de temas definidos para el front
 */
const validateGruoup = [
  check('group_id')
    .isInt()
    .withMessage('group_id param must be a integer')
    .trim()
    .bail()
    .isIn([1, 2, 3])
    .withMessage('Select valid theme [1,2,3]')
    .toInt(),

  (req, res, next) => {
    validateResult(req, res, next)
  },
]

module.exports = {
  validateTheme,
  validateGruoup,
}
