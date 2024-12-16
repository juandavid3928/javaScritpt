// * Ejercicio de Fizz Buzz

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Fizz Buzz`)
        continue
    } else if (i % 5 === 0) {
        console.log(`Buzz`)
        continue
    } else if (i % 3 === 0) {
        console.log(`Fizz`)
        continue
    }

    console.log(`Numero: ${i}`)
}