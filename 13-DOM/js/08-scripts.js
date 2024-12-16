// Traversing the DOM
const navegacion = document.querySelector(".navigation")

console.log(navegacion.childNodes) // Los espacios en blanco son considerados elementos
console.log(navegacion.children) // Los espacios en blanco son considerados elementos
console.log(navegacion.children[1].nodeName)
console.log(navegacion.children[1].nodeType)

// Traversing en los elementos para recoger los hijos
const card = document.querySelector('.card');
console.log(card.children[1].children);

// Traer el texto
console.log(card.children[1].children[1].textContent) // Traera del HTML el texto

// Cambiar imagen
card.children[1].src = "/ima/hacer3"


// Traversing en los elementos para recoger los padres
console.log(card.parentElement)









