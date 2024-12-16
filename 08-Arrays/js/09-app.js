//* El método forEach() es una función de los arreglos en JavaScript que permite iterar sobre cada elemento de un arreglo y ejecutar una función para cada elemento. Aquí tienes un ejemplo de cómo usar forEach() con un arreglo:

const miArreglo = [1, 2, 3, 4, 5];

miArreglo.forEach((arreglo) => {
    console.log(arreglo)
})
//* En este ejemplo, forEach() recorre cada elemento del arreglo miArreglo y ejecuta la función proporcionada para cada elemento.La función toma un argumento que representa el elemento actual del arreglo.En este caso, la función simplemente imprime cada elemento en la consola.

//& La salida de este código sería: 1 2 3 4 5

//* Puedes utilizar forEach() para realizar diversas operaciones en los elementos de un arreglo, como realizar cálculos, modificar los elementos, o realizar acciones específicas para cada uno de ellos.

//* Aquí tienes otro ejemplo en el que se utiliza forEach() para calcular la suma de todos los elementos en un arreglo:

let number = [10, 20, 30, 40, 50];
let suma = 0;

number.forEach(function (numero) {
    suma += numero;
});

console.log(suma); // Mostrará 150 (la suma de los números en el arreglo)

//* La función proporcionada a forEach() se ejecutará una vez por cada elemento en el arreglo, lo que hace que sea una herramienta útil para trabajar con colecciones de datos en JavaScript.
