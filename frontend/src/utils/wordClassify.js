/* eslint-disable space-before-function-paren */
/**
 * La función normalize("NFC") es un método de los objetos String en JavaScript
 * que se utiliza para normalizar caracteres de texto.
 * En particular, normalize("NFC") aplica la normalización canónica de forma
 * completa (NFC, por sus siglas en inglés) a una cadena de texto.
 *
 * La normalización canónica completa es un proceso de normalización de texto
 * que se utiliza para convertir secuencias de caracteres que representan
 * el mismo carácter, pero que se han codificado de manera diferente,
 * en una única secuencia canónica. Por ejemplo, algunos caracteres como
 * "á" pueden ser representados de diferentes formas en Unicode
 * (por ejemplo, usando un carácter combinado o usando dos caracteres separados).
 * La normalización canónica completa convierte estas secuencias en una única
 * secuencia canónica, lo que facilita la comparación y manipulación de cadenas
 * de texto.
 * En resumen, normalize("NFC") se utiliza para normalizar cadenas de texto y
 * garantizar que los caracteres estén representados de manera consistente en
 * una única secuencia canónica, lo que puede ser útil en procesamiento de
 * texto y comparación de cadenas.
 */
export const wordClassify = function (word) {
  // Eliminar acentos y convertir la palabra a minúsculas para facilitar las comparaciones.
  const wordProcess = word
  // .normalize('NFC')
  // .toLowerCase()
  // .replace(/[^a-z]/g, '')

  // Definir las reglas para cada tipo de palabra.
  const phonicsRules = {
    tonica: /[aeiouáéíóú].*[aeiouáéíóú]/,
    atona: /^[^aeiouáéíóú]*$/,
    tritonica:
      /^[^aeiouáéíóú]*[aeiouáéíóú][^aeiouáéíóú]*[aeiouáéíóú][^aeiouáéíóú]*$/
  }

  const gramaticalRules = {
    aguda: /[aeiouáéíóú][n|s]*$/,
    grave: /[^aeiouáéíóú][n|s]*[aeiouáéíóú][^n|s]*$/,
    esdrujula: /^([^aeiouáéíóú]*[aeiouáéíóú]){3,}[^n|s]*$/,
    sobresdrujula: /^([^aeiouáéíóú]*[aeiouáéíóú]){4,}[^n|s]*$/
  }

  const resultOfRules = []
  for (const type in phonicsRules) {
    if (phonicsRules[type].test(wordProcess)) {
      resultOfRules.push(type)
      // break
    }
  }

  for (const type in gramaticalRules) {
    if (gramaticalRules[type].test(wordProcess)) {
      resultOfRules.push(type)
      // break
    }
  }

  return resultOfRules
}

export const dividirEnSilabas = function (palabra) {
  // Expresión regular que coincide con patrones de sílabas comunes
  const patronSilabas = /([^aeiouáéíóúüy]*[aeiouáéíóúüy](?=[^aeiouáéíóúüy]|$)|[^aeiouáéíóúüy]*(?<=[aeiouáéíóúüy])[y](?=[^aeiouáéíóúüy]|$))/gi

  // Aplicar el patrón de sílabas a la palabra y devolver los resultados
  return palabra.match(patronSilabas)
}

export const dameSilabas = function (cadena) {
  const vocales = ['a', 'e', 'i', 'o', 'u']
  const silabas = []

  for (let i = 0; i < cadena.length; i++) {
    const l = cadena[i]
    if (vocales.includes(l)) {
      const actual = i
      let ant = ''
      if (actual !== 0) {
        ant = cadena[actual - 1]
      }
      if (vocales.includes(ant) && vocales.includes(l)) {
        if (cadena.length < actual + 1) {
          silabas[silabas.length - 1] += l
        }
      } else if (vocales.includes(cadena[actual])) {
        const silaba = cadena.slice(0, actual + 1)
        silabas.push(silaba)
        cadena = cadena.split(silaba).join('')
        // console.log(cadena, silaba) // vemos cómo se va separando
        i = -1
        silabas.push(silaba)
      }
    }
  }
  console.log(silabas)
}

/*
// agudas
console.log('Agudas')
console.log('maíz', tipoDePalabra('maíz'))
console.log('atroz', tipoDePalabra('atroz'))
console.log('fanal', tipoDePalabra('fanal'))
console.log('papel', tipoDePalabra('papel'))
console.log('virtud', tipoDePalabra('virtud'))
console.log('papel', tipoDePalabra('papel'))
console.log('volver', tipoDePalabra('volver'))
console.log()
// graves
console.log('graves')
console.log('césped', tipoDePalabra('césped'))
console.log('volumen', tipoDePalabra('volumen'))
console.log('rojo', tipoDePalabra('rojo'))
console.log('automóvil', tipoDePalabra('automóvil'))
console.log('árbol', tipoDePalabra('árbol'))
console.log('manzana', tipoDePalabra('manzana'))
console.log()
// esdrujulas
console.log('esdrujulas')
console.log('oxígeno', tipoDePalabra('oxígeno'))
console.log('hígado', tipoDePalabra('hígado'))
console.log('lógico', tipoDePalabra('lógico'))
console.log('célebre', tipoDePalabra('célebre'))
console.log('crónica', tipoDePalabra('crónica'))
console.log()
// sobreesdrujulas
console.log('sobreesdrujulas')
console.log('inútilmente', tipoDePalabra('inútilmente'))
console.log('absolutamente', tipoDePalabra('absolutamente'))
console.log('periódicamente', tipoDePalabra('periódicamente'))
console.log()
 */
