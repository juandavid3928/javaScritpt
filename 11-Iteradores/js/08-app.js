// * Iterator for in, Itera sobre un objeto

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let pendiente in pendientes) {
    console.log(pendiente)
}


const autos = {
    modelo: "Camaro",
    motor: "6.5",
    year: 1969,
}

for (let auto in autos) {
    console.log(`${auto}: ${autos[auto]}`)
}

// * Ultima forma de recorre un objeto
for (let [llave, valor] of Object.entries(autos)) {
    console.log(`La llave: ${llave} y el valor: ${valor}`)
}