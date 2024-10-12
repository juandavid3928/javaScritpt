//* En este ejemplo, estamos utilizando true y false para controlar el flujo del programa en base a condiciones. Operadores lógicos con true y false:

const tienePermiso2 = true;
const esAdmin = false;

const puedeEditar = tienePermiso2 && esAdmin;
console.log('¿Puede editar? ' + puedeEditar); // Devuelve false

const puedeBorrar = tienePermiso2 || esAdmin;
console.log('¿Puede borrar? ' + puedeBorrar); // Devuelve true

const noEsAdmin = !esAdmin;
console.log('¿No es admin? ' + noEsAdmin); // Devuelve true

//* En este ejemplo, utilizamos los operadores lógicos && (AND), || (OR) y!(NOT) con valores booleanos para tomar decisiones más complejas. Comparación con true y false:

const numero = 5;

const esIgualACinco = numero === 5;
console.log('¿Es igual a cinco? ' + esIgualACinco); // Devuelve true

const noEsIgualACinco = numero !== 5;
console.log('¿No es igual a cinco? ' + noEsIgualACinco); // Devuelve false

//* Aquí, estamos comparando una variable con el valor 5 utilizando los operadores de igualdad(===) y desigualdad(!==) para obtener valores booleanos.
