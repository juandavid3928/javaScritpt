// * Pasarle un valor de una función a otra
let total = 0

// % Se crea una función para sumar el precio del carrito
function AgregarPrecioCarro(precio) {
    return total += precio
}

// % Función para tomar el valor de la otra función y agregar el iva
function agregarIva(total) {
    return total * 1.19
}

// % Se agregan los precios
total = AgregarPrecioCarro(100)
total = AgregarPrecioCarro(100)
total = AgregarPrecioCarro(100)


//  Se llaman las funciones
console.log('Total: $ %d pesos', total)
console.log('Total a pagar: $ %d pesos', agregarIva(total))

