'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SearchWords', [
      // Agudas, Graves, Esdrújulas y Sobresdrújulas
      {
        word: 'camión',
        clue: 'Vehículo grande que transporta mercancías (aguda)',
        level: 1,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'fácil',
        clue: 'Algo que no representa mucha dificultad (grave)',
        level: 1,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'teléfono',
        clue: 'Aparato para comunicarse a distancia (esdrújula)',
        level: 2,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'dándomelo',
        clue: 'Entregándomelo a mí (sobresdrújula)',
        level: 2,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'pared',
        clue: 'Elemento que separa espacios en una construcción (aguda)',
        level: 3,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'música',
        clue: 'Arte de combinar sonidos en una secuencia (esdrújula)',
        level: 3,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'árbol',
        clue: 'Planta grande con tronco de madera (grave)',
        level: 4,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'cómpramelo',
        clue: 'Adquiérelo para mí (sobresdrújula)',
        level: 4,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'sofá',
        clue: 'Mueble para sentarse cómodamente (aguda)',
        level: 5,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'rápido',
        clue: 'Algo que se mueve a gran velocidad (esdrújula)',
        level: 5,
        accent_type: 'agudas',
        created_at: new Date(),
        updated_at: new Date()
      },

      // Palabras Tónicas y Átonas
      {
        word: 'papá',
        clue: 'Nombre familiar para el padre (tónica)',
        level: 1,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'café',
        clue: 'Bebida popular por las mañanas (tónica)',
        level: 1,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'de',
        clue: 'Preposición que indica posesión o relación (átona)',
        level: 2,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'el',
        clue: 'Artículo definido masculino singular (átona)',
        level: 2,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'mamá',
        clue: 'Nombre familiar para la madre (tónica)',
        level: 3,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'sofá',
        clue: 'Mueble cómodo para sentarse (tónica)',
        level: 3,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'la',
        clue: 'Artículo definido femenino singular (átona)',
        level: 4,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'para',
        clue: 'Preposición que indica propósito o destino (átona)',
        level: 4,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'té',
        clue: 'Bebida hecha de hojas de camellia sinensis (tónica)',
        level: 5,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'con',
        clue: 'Preposición que indica acompañamiento (átona)',
        level: 5,
        accent_type: 'tonicas',
        created_at: new Date(),
        updated_at: new Date()
      },

      // Palabras Tritónicas
      {
        word: 'término',
        clue: 'Palabra o expresión (esdrújula)',
        level: 1,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'terminó',
        clue: 'Concluyó una acción (aguda)',
        level: 1,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'práctico',
        clue: 'Útil o funcional (esdrújula)',
        level: 2,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'practico',
        clue: 'Yo realizo una actividad frecuentemente (grave)',
        level: 2,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'cántico',
        clue: 'Composición poética o musical (esdrújula)',
        level: 3,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'cantico',
        clue: 'Yo canto frecuentemente (grave)',
        level: 3,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'crítico',
        clue: 'Persona que juzga o analiza algo (esdrújula)',
        level: 4,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'critico',
        clue: 'Yo juzgo o evalúo algo (grave)',
        level: 4,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'público',
        clue: 'Conjunto de personas que asisten a un evento (esdrújula)',
        level: 5,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        word: 'publico',
        clue: 'Yo hago algo conocido o accesible (grave)',
        level: 5,
        accent_type: 'tritonicas',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SearchWords', null, {});
  }
};

/* 
    {
        word: '',
        clue: '',
        level: ,
        accent_type: '',
        created_at: new Date(),
        updated_at: new Date()
      }
*/