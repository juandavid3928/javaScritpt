const title = document.querySelector(".contenido-hero h1")

// * Trae el valor con las tags HTML
console.log(title.innerHTML)

// Solo texto
console.log(title.innerText)

// Solo texto hasta los campos invisibles
console.log(title.textContent)

// un tip para sacar el valor junto
document.querySelector(".title").textContent = "Hola"
//const data = document.querySelector("#contenido-hero h1").textContent

// Reemplazar una imagen
const image = document.querySelector('.contenedor-cards .card')
image.src = 'img/hacer2.jpg'
