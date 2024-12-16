//* Iterar a través de un arreglo: Puedes usar un bucle for para recorrer todos los elementos de un arreglo:

const miArreglo = [10, 20, 30, 40, 50];

console.log(miArreglo[2]); // Mostrará 10
console.log(miArreglo[4]); // Mostrará 30

for (let i in miArreglo) {
    console.log(miArreglo[i]);
}

//& * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const arrayMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'];

console.log(arrayMonth[2]);
console.log(arrayMonth[6]);

for (const month of arrayMonth) {
    console.log(month);
}
