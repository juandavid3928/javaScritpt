let result;

//* Suma
const suma = (a, b) => {
    return a + b;
};

//* Resta
const resta = (a, b) => {
    return a - b
};

//* Multiplicación
const multiplication = (a, b) => {
    return a * b;
};

//* División
const division = (a, b) => {
    return a / b;
};

//* Potencia
const potencia = (a, b) => {
    return a ** b;
};

//* Módulo
const modulo = (a, b) => {
    return a % b;
};

console.log('La suma', suma(30, 20));
console.log('La resta', resta(30, 20));
console.log('La multiplicación', multiplication(30, 20));
console.log('La division', division(30, 20));
console.log('La potencia', potencia(30, 20));
console.log('La modulo', modulo(30, 20));
