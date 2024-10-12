//* El orden de las operaciones. Para entenderlo mejor, aquí tienes una lista de las operaciones comunes en JavaScript y su orden de ejecución, de mayor a menor prioridad: Paréntesis (): Las operaciones dentro de paréntesis se realizan primero. Por ejemplo:

let resultado1 = (2 + 3) * 4; // 20, porque primero se suma 2 + 3 y luego se multiplica por 4.
console.log("Orden de las operaciones", resultado1)

//* Operadores de Exponentiation **: Estos operadores realizan potenciación. Por ejemplo:
let resultado2 = 2 ** 3; // 8, porque 2 elevado a la 3ª potencia es igual a 8.
console.log("Potencia de 2 ala 3 es:", resultado2)

// *Multiplicación * y División /: Estos operadores se ejecutan antes que la suma y la resta. Por ejemplo:
let resultado3 = (10 * 2) / 5; // 4, porque primero se multiplica 10 por 2 y luego se divide por 5.
console.log("(10 * 2) / 5 =", resultado3)

//* Suma + y Resta -: Estos operadores tienen la misma prioridad y se ejecutan de izquierda a derecha.Por ejemplo:
let resultado4 = 5 + 3 - 2; // 6, porque primero se suma 5 y 3, y luego se resta 2.
console.log("5 + 3 - 2 = " + resultado4)

//* Operadores de Asignación =, +=, -= y otros: Estos operadores se utilizan para asignar valores a variables y tienen una prioridad baja.Por ejemplo:
let x = 5;
x += 3; // x ahora es 8, porque es equivalente a x = x + 3.

//* Operadores de Comparación y Lógicos: Estos operadores se utilizan para comparar valores y realizar operaciones lógicas.Tienen una prioridad baja en relación con las operaciones aritméticas.Por ejemplo:
let esMayor = 5 > 3 && 10 < 20; // true, porque ambas condiciones son verdaderas.
console.log("Es Mayor", esMayor)

//* Recuerda que puedes usar paréntesis para controlar el orden de las operaciones y asegurarte de que se ejecuten de la manera deseada.
