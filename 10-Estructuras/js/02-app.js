// * Comparar normal y estricta
const valor = "100"

// Normal
if (valor == 100) {
    console.log(`100 es igual ${valor}`)
}

// Estricto
if (valor === 100) {
    console.log(`100 es igual ${valor}`)
} else {
    console.log(`${valor} no es igual a 100 `)
}