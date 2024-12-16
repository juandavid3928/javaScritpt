//* Para agregar elementos al inicio y al final de un arreglo en JavaScript, puedes usar los métodos unshift() para agregar al principio y push() para agregar al final. Luego, puedes usar el operador de propagación (...) para crear un nuevo arreglo que incluya los elementos originales junto con los elementos agregados.

const miArreglo = [2, 3, 4];

// Agregar al principio del arreglo
miArreglo.unshift(1);

// Agregar al final del arreglo
miArreglo.push(5);

console.log(miArreglo); // Mostrará [1, 2, 3, 4, 5]

//* En este ejemplo, hemos agregado el número 1 al principio del arreglo y el número 5 al final del arreglo utilizando unshift() y push() respectivamente.

const carrito = []

carrito.push("Monitor de 32 pulgadas")
carrito.push("Phone 16 pro")

console.log(carrito)