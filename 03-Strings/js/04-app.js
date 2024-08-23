// Eliminar espacios
const producto = "              Monitor de 20 Pulgadas                       "
console.log(producto.length)

// Eliminar del inicio
console.log('Eliminados del inicio', producto.trimStart().length)

// Eliminar del final
console.log('Eliminados del final', producto.trimEnd().length)

// Eliminar todos los espacios en blanco
console.log('Eliminados todo los espacios', producto.trim().length)

