const btnFloat = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')


// * Show footer
const ShowFooter = () => {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        btnFloat.classList.remove('activo')
        btnFloat.textContent = 'Idioma y Moneda'
    } else {
        footer.classList.add('activo')
        btnFloat.classList.add('activo')
        btnFloat.textContent = 'X Cerrar'
    }

}

//* Crear un evento para que se ejecute el codigo
btnFloat.addEventListener('click', ShowFooter)
