// * Iterator While Loop

let i = 1
while (i <= 5) {
    if (i % 3 === 15) {
        console.log(`Fizz Buzz`)
        continue
    } else if (i % 5 === 0) {
        console.log(`Buzz`)
        continue
    } else if (i % 3 === 0) {
        console.log(`Fizz`)
        continue
    }
    i++
}
