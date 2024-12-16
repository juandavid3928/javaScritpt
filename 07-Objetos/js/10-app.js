//* Object.assign() se utiliza para copiar las propiedades de uno o más objetos fuente en un objeto destino. Aquí hay un ejemplo:

const objetoDestino = {};
const objetoFuente1 = { a: 1, b: 2 };
const objetoFuente2 = { b: 3, c: 4 };

Object.assign(objetoDestino, objetoFuente1, objetoFuente2);

console.log(objetoDestino);
// Resultado: { a: 1, b: 3, c: 4 }

//* Ten en cuenta que Object.assign() modifica el objeto destino directamente y sobrescribe las propiedades con el mismo nombre de las fuentes posteriores.

//* Operador de propagación (...Spread Operator), se utiliza para copiar todas las propiedades de un objeto en un nuevo objeto o para combinar propiedades de múltiples objetos en uno nuevo. Aquí hay un ejemplo:

const objetoFuente = { a: 1, b: 2 };
const copiaObjeto = { ...objetoFuente };

console.log(copiaObjeto);
// Resultado: { a: 1, b: 2 }

//* El operador de propagación crea una copia superficial del objeto fuente. Si deseas combinar múltiples objetos en uno nuevo, puedes hacerlo de la siguiente manera:

const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };

const objetoCombinado = { ...objeto1, ...objeto2 };

console.log(objetoCombinado);
// Resultado: { a: 1, b: 3, c: 4 }

//& `Object.assign()` modifica directamente el objeto destino y se utiliza principalmente para copiar propiedades de objetos fuente en un objeto destino existente.

//& El operador de propagación crea una nueva copia de un objeto o combina objetos en uno nuevo, sin modificar los objetos originales, y se utiliza para crear nuevos objetos o copias de objetos existentes.
