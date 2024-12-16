//* crear un nuevo arreglo que incluya los elementos originales junto con los elementos agregados, puedes usar el operador de propagación (...).

const miArreglo = [2, 3, 4];

// Agregar al principio y al final del arreglo
const nuevoArreglo = [1, ...miArreglo, 5];

console.log(nuevoArreglo); // Mostrará [1, 2, 3, 4, 5]

const world = ['En', 'este', 'arreglo', 'se', 'ven', 'los', 'números'];

let result = [...world];

console.log([...result, nuevoArreglo].join(' '));

//* En este ejemplo, hemos creado un nuevo arreglo nuevoArreglo que contiene el número 1 al principio, seguido de todos los elementos de miArreglo, y luego el número 5 al final, utilizando el operador de propagación (...).
