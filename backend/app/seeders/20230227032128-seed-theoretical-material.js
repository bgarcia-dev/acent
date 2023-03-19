'use strict'

/** @type {import('sequelize-cli').Migration} */
const { TheoreticalMaterial, SourceOrigin } = require('../models')
module.exports = {
  async up(queryInterface, Sequelize) {
    // Agudas
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
          updated_at: '2023-03-18',
          source_origin:
            'https://www.diccionariodedudas.com/palabras-agudas-graves-esdrujulas-y-sobreesdrujulas/',
        },
        {
          theoretical_material_id: 1,
          updated_at: '2023-03-18',
          source_origin: 'https://www.diccionariodedudas.com/palabras-agudas/',
        },
      ],
      {},
    )
    // Graves
    await TheoreticalMaterial.create({
      name: 'Palabras graves (llanas)',
      theme_id: 2,
      source:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras graves </p>' +
        '<p class="text-justify q-px-md">Las palabras graves son las que tienen la mayor fuerza de voz en su penúltima sílaba. </p>' +
        '<p class="text-justify q-px-md">Como podemos intuir, <b>eso significa que para que una palabra pueda ser grave necesitará tener al menos dos sílabas. </b> Por ejemplo, “cable” (“ca – ble”) o “cosmos” (“cos – mos”).</p>' +
        '<p class="text-justify q-px-md"> <b>A las palabras graves se conoce también como “llanas”.</b> Sin que quepa duda, estas palabras son las más usadas en el español. Y podemos encontrarlas cortas, como “canto” (bisílaba), o largas, como “cauteloso” (tetrasílaba).</p>' +
        '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras graves </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Árbol</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Mármol</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cuándo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cuánto</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cómo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Dónde</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Útil</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Jiménez</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Césped</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ámbar</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ángel</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cristóbal</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> ¿Cuándo llevan tilde las palabras graves? </p>' +
        '<p class="text-justify q-px-md"> Las palabras graves llevan tilde siempre que no terminen en “n”, “s” ni vocal.</p>' +
        '<p class="text-justify q-px-md"> Si nos fijamos bien, estas normas son exactamente opuestas a las de las agudas. Tengamos presente eso, y nos será muy fácil recordarlas.</p>' +
        '<p class="text-justify q-px-md"> De ese modo, palabras como “ágil”, “cártel” y “lápiz” <b>llevan tilde</b>, <u>pues su terminación lo justifica</u>. En los primeros dos casos, acaban en “l”; en el tercero, en “z”. Por ende, pueden ir acentuadas.</p>' +
        '<p class="text-center text-h5 col-12 q-py-lg">Palabras graves sin tilde</p>' +
        '<p class="text-justify q-px-md">Naturalmente, existen en nuestro vocabulario muchas palabras graves sin tilde. <b>De hecho, la mayoría de ellas no la lleva.</b></p>' +
        '<p class="text-justify q-px-md">En este grupo podemos incluir términos como “saludo” y “cambien”. El primero acaba en vocal, mientras que el segundo termina en “n”. Por consiguiente,<b> no deben ir acentuados.</b></p>' +
        '<p class="text-justify q-px-md">Sea como sea, la mayor parte del tiempo nos toparemos con palabras graves que no tendremos que acentuar. Eso nos facilitará mucho la escritura.</p>' +
        '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras graves sin tilde </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Caramelo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Casa</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Silla</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Chocolate</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Amapola</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Carambola</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Amarillo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calambre</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cangrejo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Cambio</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Canto</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Calle</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 2,
          updated_at: '2023-03-19',
          source_origin: 'https://unibetas.com/palabras-graves',
        },
      ],
      {},
    )
    // Esdrújulas
    await TheoreticalMaterial.create({
      name: 'Palabras esdrújulas',
      theme_id: 3,
      source:
        '<p class="text-center text-h3 col-12 q-py-lg"> Palabras esdrújulas </p>' +
        '<p class="text-justify q-px-md">Las palabras esdrújulas son las que tienen la mayor fuerza de voz en la antepenúltima sílaba.</p>' +
        '<p class="text-justify q-px-md"> <b>Las palabras esdrújulas pueden ser palabras de muchas clases: sustantivos, verbos, adjetivos e incluso adverbios.</b> Por ende, son quizá las más variadas en ese sentido dentro de nuestro idioma.</p>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> ¿Cuándo llevan tilde las palabras esdrújulas? </p>' +
        '<p class="text-center" col-12 q-px-md"> <b><u>Las palabras esdrújulas siempre llevan tilde, sin excepciones.</u></b></p>' +
        '<p class="text-justify q-px-md"><b>Esa regla es válida sin importar ni la cantidad de sílabas presentes</b> en la palabra ni tampoco su terminación. La única <b>condición</b> indispensable es que el acento de tipo prosódico se halle en la antepenúltima sílaba.</p>' +
        '<p class="text-justify q-px-md">De esa manera, una palabra esdrújula como “pájaro” (trisílaba) va siempre con su acento ortográfico, al igual que “espectáculo” (pentasílaba). Lo mismo con “súbita” (que termina en vocal) y con “déficit” (que acaba en “t”).</p>' +
        '<p class="text-center col-12 q-py-lg"> Ejemplos de palabras esdrújulas </p>' +
        '<table style="border-collapse: collapse; width: 100%;">' +
        '<tbody>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ábaco</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ímpetu</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Prójimo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Ámbito</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Órbita</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Fábula</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Lógica</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Crédito</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Sábado</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Prólogo</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Píldora</td>' +
        '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Máximo</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<br/>' +
        '<p class="text-center text-h5 col-12 q-py-lg"> Excepción a la regla <br/> (Palabras esdrújulas sin tilde) </p>' +
        '<p class="text-justify" col-12 q-px-md">Si ya dijimos que toda palabra esdrújula va acentuada, no puede ser posible que haya una que no lleve tilde. Sin embargo, hay un grupo de palabras que hacen dudar a muchos sobre esto.</p>' +
        '<p class="text-justify" col-12 q-px-md"><b>Todas comparten una misma terminación:</b> “audazmente”, “locuazmente”, etc. Asimismo todas pertenecen a una misma categoría gramatical: el adverbio. Pues bien, sucede lo siguiente:</p>' +
        '<p class="text-center col-12 q-px-md"><u><b>Todos los adverbios terminados en “mente” tienen una acentuación especial.</b></u></p>' +
        '<p class="text-justify" col-12 q-px-md">Por consiguiente, para poder tildarlos <b>no basta</b> con que identifiquemos dónde está <b>el acento prosódico</b>, sino que hay que fijarse en <b>otro detalle</b>.</p>' +
        '<p class="text-center text-h6" col-12 q-px-md">¿Cómo tildar los adverbios terminados en “mente”?<p>' +
        '<p class="text-justify" col-12 q-px-md">Estos adverbios son en realidad la unión de dos palabras. En primer lugar, un adjetivo; en segundo, la palabra “mente”.<br/>' +
        'Esa fórmula nunca cambia. <b>Lo que sí puede variar es la acentuación.</b> Esta última dependerá del adjetivo pues si llevaba tilde, se conserva, y si no, se deja tal cual.</p>' +
        '<p class="text-justify" col-12 q-px-md">Tomemos de vuelta el <b>ejemplo</b> de <i>“audazmente”</i>. Si pronunciamos esta palabra, nuestro oído pareciera indicarnos que el acento prosódico está en <i>“daz”</i>, tal como en el adjetivo original, por lo que la catalogaríamos como palabra esdrújula.</p>' +
        '<p class="text-justify" col-12 q-px-md"><b>No obstante, en esta situación el criterio que debemos seguir no es sonoro, sino gráfico</b>. Y si nos fijamos, el adjetivo <i>“audaz”</i> no lleva tilde, así que no podemos agregársela en el adverbio.</p>' +
        '<p class="text-justify" col-12 q-px-md">Por lo tanto, a pesar de que “audazmente” nos suene como una esdrújula no debemos acentuarla basándonos en eso. Tan solo apliquemos la norma anterior, y no cometeremos ningún error.</p>',
    })
    await queryInterface.bulkInsert(
      'SourceOrigin',
      [
        {
          theoretical_material_id: 3,
          updated_at: '2023-03-19',
          source_origin: 'https://unibetas.com/palabras-esdrujulas/',
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TheoreticalMaterial', null, {})
  },
}
