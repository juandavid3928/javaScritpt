//* Tanto forEach() como map() son métodos que se utilizan para iterar sobre elementos en un arreglo en JavaScript, pero tienen diferencias fundamentales en su funcionamiento y propósito:

//* forEach(): Propósito principal: forEach() se utiliza principalmente para ejecutar una función en cada elemento del arreglo sin crear un nuevo arreglo resultante. Es útil cuando deseas realizar una acción o realizar operaciones en cada elemento del arreglo, pero no necesitas crear un nuevo arreglo con los resultados. Retorno de valor: forEach() no devuelve un nuevo arreglo ni modifica el arreglo original. Devuelve undefined. En otras palabras, no se espera que modifiques los elementos originales o que devuelvas valores de la función que proporcionas a forEach().

const miArreglo1 = [1, 2, 3, 4];

miArreglo1.forEach(function (elemento) {
	console.log(elemento); // No se crea un nuevo arreglo y no se espera un valor de retorno.
});

//* map(): Propósito principal: map() se utiliza para crear un nuevo arreglo basado en la transformación de los elementos del arreglo original. Es útil cuando deseas aplicar una función a cada elemento del arreglo y obtener un nuevo arreglo con los resultados de esas transformaciones. Retorno de valor: map() devuelve un nuevo arreglo con los resultados de aplicar la función proporcionada a cada elemento del arreglo original. No modifica el arreglo original.

let miArreglo2 = [1, 2, 3, 4];

let nuevoArreglo2 = miArreglo2.map(function (elemento) {
	return elemento * 2;
});

console.log(nuevoArreglo2); // Mostrará [2, 4, 6, 8]

//* En resumen, la principal diferencia entre forEach() y map() es que forEach() se utiliza para realizar acciones o operaciones en cada elemento de un arreglo sin crear un nuevo arreglo, mientras que map() se utiliza para crear un nuevo arreglo basado en la transformación de los elementos del arreglo original.La elección entre uno u otro dependerá de tus necesidades específicas en tu programa.
