// * Como se comunica las funciones
iniciarApp()

function iniciarApp() {
    console.log('Iniciando App...')

    segundaFunction()
}

function segundaFunction() {
    console.log('Desde la segunda funcion')
    usuarioAutenticado('Juan')
}

function usuarioAutenticado(username) {
    console.log('Autenticando usuario...')
    console.log(`Usuario autenticado exitosamente: ${username}`)
}