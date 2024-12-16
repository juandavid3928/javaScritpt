// * Methods filter


const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

// * Con el filter puedes buscar un dato en específico o filtrar por una condisicion
const carritoFilter = carrito.filter(c => c.nombre !== 'Celular')
console.log(carritoFilter)