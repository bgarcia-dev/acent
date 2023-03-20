/**
 * Enlaces de referencia
 * https://github.com/validatorjs/validator.js
 * https://express-validator.github.io/docs/
 * https://express-validator.github.io/docs/custom-error-messages.html
 */
const { check, query } = require('express-validator')
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

module.exports = {
  validateTheme,
}
