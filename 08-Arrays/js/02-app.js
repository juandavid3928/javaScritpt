//* Acceder a elementos del arreglo: Puedes acceder a elementos de un arreglo utilizando su índice (comenzando desde 0):

const miArreglo = [10, 20, 30, 40, 50];

console.log(miArreglo[2]); // Mostrará 10
console.log(miArreglo[4]); // Mostrará 30

// Arreglo con otro arreglo
const ArregloTwo = [60, 70, 80, 90, 100, [200, 300, 400]];

// El segundo arreglo se toma el 300
console.log(ArregloTwo[5][1]);
