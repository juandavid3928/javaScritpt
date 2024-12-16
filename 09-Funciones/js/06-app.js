// * Parámetros por defecto
const saludar = (name = 'Desconocido', age = 0) => {
    console.log(`Hello ${name}, how are you? 
You're already ${age} years old that's great\n`)
};


// % Si se envian los argumento, los parámetros por defecto no se mostrarán
saludar('Juan', 27)

// % Si no se envian los argumento, los parámetros por defecto se van a mostrar
saludar()

