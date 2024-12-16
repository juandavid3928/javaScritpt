// En JavaScript, hay dos formas comunes de definir funciones: mediante declaraciones de funciones (function declarations) y mediante expresiones de funciones (function expressions). La principal diferencia entre ambas radica en cómo se declaran y cómo se pueden usar. Aquí te explicaré sus diferencias clave:

//* 1. Declaración de Funciones (Function Declarations):

//& Sintaxis: Se declaran utilizando la palabra clave function seguida del nombre de la función.

//& Hoisting: Las declaraciones de funciones son "hoisted" (elevadas) al principio del ámbito en el que se encuentran, lo que significa que pueden ser utilizadas antes de su declaración real en el código.

function suma(a, b) {
    return a + b;
}

//& Uso: Puedes llamar a una función declarada en cualquier lugar del código, incluso antes de su declaración.

//* 2. Expresiones de Funciones (Function Expressions): Sintaxis: Se crean como una asignación de una función anónima (o nombrada) a una variable o como parte de una expresión.

//& Hoisting: Las expresiones de funciones no se "elevan" al principio del ámbito, por lo que no se pueden llamar antes de su declaración en el código.Ejemplo de función anónima:

const resta1 = function (a, b) {
    return a - b;
};

//& Ejemplo de función nombrada:

const multiplicar = function multiplica(a, b) {
    return a * b;
};

//& Uso: Solo puedes llamar a una función expresión después de su declaración.

//* En resumen: Las declaraciones de funciones se "elevan" al principio del ámbito, lo que permite llamarlas antes de su declaración en el código. Las expresiones de funciones no se "elevan" y solo se pueden llamar después de su declaración. Las expresiones de funciones a menudo se utilizan cuando deseas asignar una función a una variable o cuando necesitas definir funciones dentro de un contexto específico, como un objeto o como argumentos de otras funciones.

// Declaración de función (se puede llamar antes)
console.log(multiplicar(2, 3)); // Funciona
function multiplicar(a, b) {
    return a * b;
}

// Expresión de función (no se puede llamar antes)
console.log(resta(5, 2)); // Error: resta is not defined
let resta = function (a, b) {
    return a - b;
};

//* Ten en cuenta que las expresiones de funciones son útiles cuando deseas asignar funciones como valores a variables o pasar funciones como argumentos a otras funciones, mientras que las declaraciones de funciones son convenientes cuando necesitas definir funciones que pueden ser llamadas en cualquier lugar del ámbito.
