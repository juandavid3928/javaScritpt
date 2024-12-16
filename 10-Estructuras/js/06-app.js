// EL operador && se cumple si las dos o mas condicciones se cumplen

const user = true
const puedePagar = true

if (user && puedePagar) {
    console.log(`Si puedes comprar`)
}

// negar un valor, si es true pasa a false
if (user && !puedePagar) {
    console.log(`No tienes fondos`)
}