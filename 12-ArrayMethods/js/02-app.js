// * Methods findIndex

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

// % Saber en qué index se encuentra ese elemento en un array
const index = meses.findIndex((mes) => mes === 'Abril')
console.log(`El elemento ${meses[index]}, se encuentra en el index ${index} `)


// % Saber en qué index se encuentra ese elemento en un objeto
const indexObject = carrito.findIndex(car => car.nombre === 'Celular')
console.log(`El articulo ${carrito.nombre}`)




