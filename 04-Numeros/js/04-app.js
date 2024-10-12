// Importancia de cada operador

// Más valor y al mismo nivel, Multiplicación y division
console.log("Division mas multiplicación: ", 5 / 2 * 100, ", Multiplicación mas division", 5 * 100 / 2)

// Más valor y al mismo nivel, Suma y Resta
console.log("Division mas multiplicación: ", 5 / 2 * 100, ", Multiplicación mas division", 5 * 100 / 2)

// las (), pueden alterar el nivel de los operadores
console.log(`5 + 5 * 2 = 15 Y con los (5 + 5) * 2 = ${(5 + 5) * 2}`)


//     Parámetros: numberFinal (number), longing (number):
// Descripción
// La función multi genera y muestra en la consola una tabla de multiplicar para un número específico (numberFinal). La tabla se extiende hasta un valor límite definido por el parámetro longing. Cada línea de la tabla muestra el producto del número base multiplicado por cada número en el rango de 1 hasta longing (inclusive).
//
// Descripción: El número base para la tabla de multiplicar.
//     Ejemplo: Si numberFinal es 5, la tabla mostrará multiplicaciones de 5 con números del 1 al longing.
// longing (number):
//
//      Tipo: number
// Descripción: El límite superior para la tabla de multiplicar, indicando hasta qué número se multiplicará numberFinal.
//     Ejemplo: Si longing es 10, la tabla incluirá multiplicaciones desde 5 x 1 hasta 5 x 10.
// Valor de retorno
// void: La función no retorna ningún valor. Su propósito es únicamente imprimir la tabla de multiplicar en la consola.
const multi = (numberFinal, longing) => {
    console.log(`Tabla de multiplicar del número ${numberFinal}`)
    for (let i = 1; i < longing + 1; i++) {
        console.log(`${numberFinal} x ${i} = ${numberFinal * i}`)
    }
}

multi(2, 20)