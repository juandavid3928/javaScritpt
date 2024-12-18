// > variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCurso = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let itemCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
	listaCurso.addEventListener('click', agregarCurso);

	// > Eliminar un Curso
	carrito.addEventListener('click', eliminarCurso);

	// > Vaciar el carrito
	vaciarCarrito.addEventListener('click', () => {
		itemCarrito = [];
		limpiarHTML();
	});
}

// > Functions
function agregarCurso(e) {
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		leerDatosCurso(e.target.parentElement.parentElement);
	}
}

// > Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
	// > Crear un objeto del curso
	const infoCurso = {
		id: curso.querySelector('a').getAttribute('data-id'),
		autor: curso.querySelector('p').textContent,
		imagen: curso.querySelector('img').src,
		nombre: curso.querySelector('h4').textContent,
		precio: parseFloat(curso.querySelector('.precio').textContent.match(/\d+/g)[0]),
		precioDescuento: parseFloat(curso.querySelector('.precio').textContent.match(/\d+/g)[1]),
		cantidad: 1,
	};

	// > Verificar si un curso existe y aumentar la cantidad
	const existe = itemCarrito.some((curso) => curso.id === infoCurso.id);
	if (existe) {
		const index = itemCarrito.findIndex((c) => c.id === infoCurso.id);
		itemCarrito[index].cantidad++;
	} else {
		itemCarrito = [...itemCarrito, infoCurso];
	}

	// > Mostrar los cursos
	mostrarCarrito();
}

// > Mostrar las compras en el carrito HTML
function mostrarCarrito() {
	// < Limpia el carrito
	limpiarHTML();

	// > Recorre los items del carrito y añade cada uno a la tabla en el HTML
	itemCarrito.forEach((curso) => {
		const row = document.createElement('tr');
		const { imagen, nombre, cantidad, precio, precioDescuento, id } = curso;

		row.innerHTML = `
           <td>${nombre}</td>
		   <td>${cantidad}</td>
		   <td>$ ${precio} pesos</td>
		   <td>$ ${precio - precioDescuento * cantidad} pesos</td>
		   <td>$ ${precioDescuento} pesos</td>

		    <td>
			<img src="${imagen}" width="100">
			</td>

            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> ${cantidad > 1 ? '-' : 'X'} </a>
            </td>
        
        `;

		contenedorCarrito.appendChild(row);
	});
}

// > Limpiar los cursos del body repetidos

function limpiarHTML() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}

// > Borrar un curso del carrito
function eliminarCurso(e) {
	if (e.target.classList.contains('borrar-curso')) {
		const idCurso = e.target.getAttribute('data-id');
		const cursoIndex = itemCarrito.findIndex((curso) => curso.id === idCurso);

		if (itemCarrito[cursoIndex].cantidad > 1) {
			itemCarrito[cursoIndex].cantidad--;
		} else {
			itemCarrito = itemCarrito.filter((curso) => curso.id !== idCurso);
		}

		mostrarCarrito();
	}
}
