//* Desestructuración básica de arreglos: Puedes asignar elementos de un arreglo a variables individuales utilizando corchetes []:

const miArreglo1 = [1, 2, 3];

// Desestructuración
const [a, b, c] = miArreglo1;

console.log(a); // Mostrará 1
console.log(b); // Mostrará 2
console.log(c); // Mostrará 3

//* Omitir elementos no deseados: Puedes omitir elementos que no necesitas utilizando comas dentro de los corchetes:

const miArreglo2 = [1, 2, 3, 4, 5];

// Solo desestructura el primer y tercer elemento
let [primero, , tercero] = miArreglo2;

console.log(primero); // Mostrará 1
console.log(tercero); // Mostrará 3

//* Asignar valores predeterminados: Puedes asignar valores predeterminados a las variables en caso de que el elemento en el arreglo sea undefined:

const miArreglo3 = [1, 2];

let [d, e, f = 3] = miArreglo3;

console.log(d); // Mostrará 1
console.log(e); // Mostrará 2
console.log(f); // Mostrará 3 (valor predeterminado)

//* Desestructuración en funciones: También puedes utilizar la desestructuración en funciones para recibir argumentos en un orden específico:

function sumaYResta([a, b]) {
    return [a + b, a - b];
}

const resultado = sumaYResta([5, 3]);
console.log(resultado); // Mostrará [8, 2]

//* Desestructuración con el operador de propagación: Puedes combinar la desestructuración con el operador de propagación (...) para capturar el resto de los elementos en un arreglo:

const miArreglo4 = [1, 2, 3, 4, 5];

const [primerElemento, ...resto] = miArreglo4;

console.log(primerElemento); // Mostrará 1
console.log(resto); // Mostrará [2, 3, 4, 5]

//* La desestructuración de arreglos es una característica poderosa y útil que simplifica la manipulación de datos en JavaScript.Puedes aplicarla en diversas situaciones para hacer tu código más legible y conciso.
