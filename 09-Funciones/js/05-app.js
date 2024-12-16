// * Parámetros y argumentos en las funciones


// % En la función saludar se resive como parámetros el nombre y el apellido
const saludar = (name, age) => {
    console.log(`Hello ${name}, how are you? 
You're already ${age} years old that's great`)
};


// % Al momento de llamar la función se le para los argumentos
saludar('Juan', 27)