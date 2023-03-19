'use strict'

/** @type {import('sequelize-cli').Migration} */
const { TheoreticalMaterial, SourceOrigin } = require('../models')
module.exports = {
  async up(queryInterface, Sequelize) {
    await TheoreticalMaterial.create({
      name: 'Palabras agudas',
      theme_id: 1,
      source:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras agudas </p>' +
        '<p class="text-justify q-px-md">También llamadas oxítonas. Su sílaba tónica es la última y se <b>escriben con tilde cuando terminan en vocal</b> (mamá), <b>-n</b> (canción) o <b>-s</b> (jamás).</p>' +
        '<p class="text-justify q-px-md">No se escribe sin tilde en en el resto de las terminaciones (<i>animal, señor, pared, cantar...</i>). Tampoco lleva tilde Si la <b>-s</b> va detrás de otra consonante (<i>debuts, robots</i>).</p>' +
        '<p class="text-justify q-px-md">Más ejemplos:</p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">además</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">ají</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">salud</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">sofá</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tacón</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">calor</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">pesar</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">reloj</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">maní</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">marroquí</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tambor</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">cabezón</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">sillín</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">cojín</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">aprendiz</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">vivir</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">volar</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">avión</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">tragaluz</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">león</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Ejemplos de palabras agudas <b>con</b> tilde </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Comité</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Café</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Dominó</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Pesqué</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Entendí</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Revés</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Exprés</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Canción</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ilustración</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Acción</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Ejemplos de palabras agudas <b>sin</b> tilde </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Felicidad</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Hacer</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Buscar</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Escozor</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Abril</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Candil</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Vislumbrar</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Perseguir</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Regaliz</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"><b>Excepciones a la regla</b></p>' +
        '<p class="text-justify q-px-md">Llevan tilde las palabras con hiato (con dos vocales contiguas) aunque no terminen en -n, en -s ni en vocal.</p>' +
        '<p class="text-justify q-px-md">Esto se debe a que el acento gráfico que marca los hiatos es independiente de las reglas generales de acentuación.</p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Raíz</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Aéreo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">País</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Raúl</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ataúd</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Caída</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Oír</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Sofá</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Sábado</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '</br>' +
        '<p class="text-justify q-px-md">No llevan tilde las palabras agudas, aunque la consonante final sea -s, cuando terminan en más de una consonante.</p>' +
        '<p class="text-justify q-px-md">Por ejemplo</p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Robots</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Clips</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Lamps</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Troncos</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Nubes</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Temas</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Abrigos</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Platos</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Anillos</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>',
    })

    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 1,
          updated_at: '2023-03-19',
          source_origin:
            'https://www.diccionariodedudas.com/palabras-agudas-graves-esdrujulas-y-sobreesdrujulas/',
        },
        {
          theoretical_material_id: 1,
          updated_at: '2023-03-19',
          source_origin: 'https://www.diccionariodedudas.com/palabras-agudas/',
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TheoreticalMaterial', null, {})
  },
}
