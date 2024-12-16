// * Metodos de propiedad en un objeto


const reproductor = {
    reproducir: function (soundId) {
        console.log(`Reproduciendo cancion con el id ${soundId}`)
    },
    pausar: function () {
        console.log(`Pausando...`)
    }
}

// % Agregar un nuevo metodo

reproductor.borrar = function (soundId) {
    console.log(`Borrando la cancion con el id: ${soundId}`)
}

reproductor.reproducir(2)
reproductor.pausar()
reproductor.borrar(2)





