//  Evento en un formulario
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    // evitar enviar el formulario bruscamente
    e.preventDefault()
})