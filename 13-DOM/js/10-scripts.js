// Crear elemento
const enlace = document.createElement('A');

// Agregándole el texto
enlace.textContent = 'Nuevo Enlace';

// añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = "_blank";
console.log(enlace);

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

// Crear una Card
const parrafo1 = document.createElement('P')
parrafo1.textContent = `Concierto`
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('P')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('P')
parrafo3.textContent = '$ 800 por persona'
parrafo3.classList.add('precio')

// Crear el Div para agregar los valores
const div = document.createElement('div')
div.classList.add('info')
div.appendChild(parrafo1)
div.appendChild(parrafo2)
div.appendChild(parrafo3)

// Crear Imagen
const img = document.createElement('img')
img.src = 'img/hacer1.jpg'
div.insertBefore(img, div.children[0])

// Agregar al HTML
const HTML = document.querySelector('.hacer .contenedor-cards')
HTML.classList.add('div')
HTML.insertBefore(div, HTML.children[0])