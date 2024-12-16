//* 1. Declaración de una función:

// Declaración de una función llamada suma que toma dos parámetros
function suma(a, b) {
    return a + b;
}

// Llamando a la función suma
console.log('Suma: %d', suma(5, 3)); // Esto imprimirá 8 en la consola

//* 2. Funciones de flecha(Arrow functions):
// Declaración de una función de flecha llamada resta que toma dos parámetros
const resta = (a, b) => a - b;

// Llamando a la función resta
console.log('Resta: %d', resta(10, 3)); // Esto imprimirá 7 en la consola

//* 3. Función anonima o Function Expression
const multiplicar = function (a, b) {
    return a * b;
}

// Llamando a la función multiplicar
console.log('Multiplicar: %d', multiplicar(10, 3)); // Esto imprimirá 30 en la consola
