// * Iterator forEach y map

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// * Ejemplo 1
[1, 2, 3, 4, 5, 6].forEach(n => {
    console.log(n)
})

// * Ejemplo 2
const NewPendientes = pendientes.forEach((pendiente, index) => console.log(`${index}: ${pendiente}`));

// * el For Each no genera un nuevo arreglo
console.log(NewPendientes);


// * map si crear un arreglo nuevo

// * Ejemplo 1
[1, 2, 3, 4].map(n => {
    console.log(n)
})

// * Ejemplo 2
const NewPendientesMap = pendientes.map((pendiente, index) => `${index}: ${pendiente}`)

console.log(NewPendientesMap);
