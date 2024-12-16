// Concat
const arrayOne = [1, 2, 3, 4, 5]
const arrayTwo = [6, 7, 8, 9, 0]

// % podremos unir dos o mas array con concat
const NewArray = arrayOne.concat(arrayTwo)
console.log(NewArray)

// % Nueva formar de unir arrays, es con el spread operator
const NewNewArray = [...arrayOne, ...arrayTwo]
console.log(NewNewArray)