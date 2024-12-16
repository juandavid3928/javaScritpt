// * Methods Some

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

//* Comprobar si un valor existe en un arreglo
const result = meses.includes('Enero')
console.log('Metodo Include:', result)


//* Comprobar si un valor existe en un Objecto
const exist = carrito.some((p) => {
    return p.nombre === 'Tablet'
})

console.log('Methods in Some', exist)





