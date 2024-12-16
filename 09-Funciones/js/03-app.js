//* 1. console.log(): Se utiliza para imprimir mensajes en la consola del navegador o en la consola de Node.js. Es útil para depurar y mostrar información durante el desarrollo.

console.log('Hola, mundo!');

//* 2. alert(): Muestra un cuadro de diálogo en el navegador con un mensaje y un botón "Aceptar". Es útil para mostrar mensajes de alerta al usuario.

alert('¡Esto es una alerta!');

//* 3. prompt(): Abre un cuadro de diálogo que permite al usuario ingresar un valor. El valor ingresado se almacena en una variable.

let nombre = prompt('Por favor, ingresa tu nombre:');

console.log('Hola, ' + nombre);

//* 4. confirm(): Muestra un cuadro de diálogo de confirmación con los botones "Aceptar" y "Cancelar". Se usa para obtener una respuesta booleana del usuario.

let respuesta = confirm('¿Estás seguro de continuar?');

if (respuesta) {
    console.log('El usuario confirmó.');
} else {
    console.log('El usuario canceló.');
}

//* 5. parseInt() y parseFloat(): Estas funciones se utilizan para convertir cadenas en números enteros o de punto flotante, respectivamente.

let numeroEntero = parseInt('42');
let numeroDecimal = parseFloat('3.14');

//* 6. typeof (): Se usa para verificar el tipo de una variable u objeto en JavaScript.

let numero = 42;
let texto = 'Hola';
console.log(typeof numero); // Esto imprimirá "number"
console.log(typeof texto); // Esto imprimirá "string"

//* 7. Math(): El objeto Math proporciona muchas funciones matemáticas útiles, como Math.random(), Math.floor(), Math.max(), Math.min(), etc.

let numeroAleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1
let numeroRedondeado = Math.floor(5.7); // Redondea hacia abajo, resultando en 5
