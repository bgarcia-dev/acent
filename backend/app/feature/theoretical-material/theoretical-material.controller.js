'use strict'
class TheoreticalMaterialController {
  
  static item = async (req, res, next) => {
    try {
      
      const data = {
        title: 'Palabras agudas',
        source: '<p>También llamadas oxítonas. Su sílaba tónica es la última y se <b>escriben con tilde cuando terminan en vocal</b> (mamá), <b>-n</b> (canción) o <b>-s</b> (jamás).</p>'
        + 'No se escribe sin tilde en en el resto de las terminaciones (<i>animal, señor, pared, cantar...</i>). Tampoco lleva tilde Si la <b>-s</b> va detrás de otra consonante (<i>debuts, robots</i>).'
        
        ,
        resources: [
          'https://www.diccionariodedudas.com/palabras-agudas-graves-esdrujulas-y-sobreesdrujulas/',
          'https://www.diccionariodedudas.com/palabras-agudas/',
        ],
        date_access:'03/15/2023'
      }

      return res.status(200).json({ status: true, data })
    } catch (error) {
      next(error)
    }
  }

}

module.exports = TheoreticalMaterialController
