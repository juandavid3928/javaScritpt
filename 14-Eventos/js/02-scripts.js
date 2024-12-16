const nav = document.querySelector('#nav');

// Event listener para el evento scroll
nav.addEventListener('scroll', () => {
    // Obtener la posición del scroll
    const scrollTop = nav.pageYOffset;

    // Si la posición del scroll es mayor a 100, cambiar el color de la barra de navegación
    if (scrollTop > 100) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

// mousedown - simula el click
// click, dblclick - doble click
// mouseup - cuando se suelta el click