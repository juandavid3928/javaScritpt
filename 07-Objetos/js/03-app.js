//* Agregar y eliminar propiedades de un objeto. Puedes agregar nuevas propiedades a un objeto de las siguientes formas: **Notación de Punto:**

const persona = {
    nombre: 'Juan David',
    edad: 30,
    ciudad: 'Medellin',
};

persona.hobby = 'Video Juego'; // Agregar una nueva propiedad usando
console.log(hobby);

//*  **Notación de Corchetes:**

const persona2 = {
    nombre: 'Juan',
    edad: 30,
};

persona['ciudad'] = 'EjemploVilla'; // Agregar una nueva propiedad usando notación de corchetes

//*  **Método `Object.assign()`:**

const persona3 = {
    nombre: 'Juan',
    edad: 30,
};

Object.assign(persona, {ciudad: 'EjemploVilla'}); // Agregar propiedades

//* Puedes eliminar propiedades de un objeto de las siguientes formas: **Operador `delete`:**

const persona4 = {
    nombre: 'Juan',
    edad: 30,
};

delete persona4.edad; // Eliminar la propiedad "edad" usando el operador delete

//*  **Método `Object.keys()` y `delete`:**

const persona5 = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'EjemploVilla',
};

let propiedades = Object.keys(persona5);
for (const element of propiedades) {
    if (element === 'edad') {
        delete persona[element]; // Eliminar una propiedad específica
    }
}
