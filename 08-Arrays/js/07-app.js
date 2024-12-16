const miArreglo = [0, 1, 2, 3, 4, 5];
console.log("Arreglo original:", miArreglo);

// * Eliminar el primer elemento de un arreglo
miArreglo.shift()
console.log("Eliminar el primero del array: ", miArreglo)

// * Eliminar el último elemento de un arreglo
miArreglo.pop()
console.log("Eliminar el ultimo elemento del array: ", miArreglo)

// * El método splice() te permite eliminar elementos de un arreglo en función de su índice. Puedes especificar el índice de inicio y la cantidad de elementos a eliminar. Por ejemplo, para eliminar un elemento en el índice 2:
miArreglo.splice(2, 1); // Elimina el elemento en el índice 2 (el número 3)
console.log("Eliminar el elemento 3:", miArreglo); // Mostrará [1, 2, 4, 5]
