'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
            question: '¿Las palabras agudas llevan más acento o mayor esfuerzo en la última silaba?',
            correct_answer: 'Si',
            wrong_answer1: 'No',
            wrong_answer2: 'Depende',
            accent_type: 'agudas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿La acentuación de palabras es importante?',
            correct_answer: 'Si',
            wrong_answer1: 'No',
            wrong_answer2: 'Depende',
            accent_type: 'agudas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿Qué son las palabras agudas?',
            correct_answer: 'Son las palabras que llevan una sílaba tónica en la última sílaba de la palabra ',
            wrong_answer1: 'Son las palabras que llevan la sílaba tónica en la segunda sílaba de la palabra',
            wrong_answer2: 'Ninguna de las anteriores',
            accent_type: 'agudas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿Cuál de estas palabras es una palabra AGUDA?',
            correct_answer: 'Japonés',
            wrong_answer1: 'Sílaba',
            wrong_answer2: 'Ninguna de las anteriores',
            accent_type: 'agudas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿Dónde lleva acento la palabra "Raton"?',
            correct_answer: 'En la "o", es decir "Ratón"',
            wrong_answer1: 'En la "a", es decir "Ráton"',
            wrong_answer2: 'Ninguna de las anteriores',
            accent_type: 'agudas',
            created_at: new Date(),
            updated_at: new Date()
        },
        { //PREGUNTAS TONICAS
            question: '¿Qué son las palabras tónicas?',
            correct_answer: 'Palabras que llevan acento prosódico',
            wrong_answer1: 'Palabras que no se acentúan',
            wrong_answer2: 'Palabras que siempre llevan tilde',
            accent_type: 'tonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: 'Las palabras átonas...',
            correct_answer: 'No tienen acento prosódico',
            wrong_answer1: 'Se pronuncian con mayor intensidad',
            wrong_answer2: 'Siempre son monosílabas',
            accent_type: 'tonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿Cuál de las siguientes es una palabra tónica?',
            correct_answer: 'Sol',
            wrong_answer1: 'El',
            wrong_answer2: 'De',
            accent_type: 'tonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: 'Las preposiciones generalmente son...',
            correct_answer: 'Átonas',
            wrong_answer1: 'Tónicas',
            wrong_answer2: 'Depende del contexto',
            accent_type: 'tonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿Qué tipo de palabra es "muy" en la oración "El cielo está muy azul"?',
            correct_answer: 'Átona',
            wrong_answer1: 'Tónica',
            wrong_answer2: 'Puede ser tónica o átona según el hablante',
            accent_type: 'tonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        { //PREGUNTAS TRITONICAS
            question: '¿Las palabras tritónicas se escriben igual pero la acentuación cambia, así como su significado?',
            correct_answer: 'Verdadero',
            wrong_answer1: 'Falso',
            wrong_answer2: 'Depende',
            accent_type: 'tritonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿Una palabra tritónica es aquella que tiene tres sílabas tónicas?',
            correct_answer: 'Verdadero',
            wrong_answer1: 'Falso',
            wrong_answer2: 'Depende',
            accent_type: 'tritonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: 'En una palabra tritónica ¿todas las sílabas se pronuncian con la misma intensidad?',
            correct_answer: 'Verdadero',
            wrong_answer1: 'Depende',
            wrong_answer2: 'Falso',
            accent_type: 'tritonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿Las palabras tritónicas siempre llevan tres tildes escritas?',
            correct_answer: 'Falso',
            wrong_answer1: 'Depende',
            wrong_answer2: 'Verdadero',
            accent_type: 'tritonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            question: '¿El concepto de "palabra tritónica" es ampliamente reconocido en la gramática española tradicional?',
            correct_answer: 'Falso',
            wrong_answer1: 'Verdadero',
            wrong_answer2: 'Depende',
            accent_type: 'tritonicas',
            created_at: new Date(),
            updated_at: new Date()
        },
      ]
    )
            
  }
}