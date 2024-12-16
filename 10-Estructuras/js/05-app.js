const metodoPago = 'efectivo'

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagate con ${metodoPago}`)
        break

    case 'cheche':
        console.log(`Pagate con ${metodoPago}`)
        break

    default:
        console.log(`No se a selecionado un metodo de pago`)
}