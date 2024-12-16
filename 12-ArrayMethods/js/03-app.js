// * Methods reduce

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

let total1 = 0;
carrito.forEach(car => total1 += car.precio)
console.log(total1)

// el reducer en un callback, para recorer un array y sumar un valor
let t = carrito.reduce((total, carrito) => total + carrito.precio, 0)
console.log(t)