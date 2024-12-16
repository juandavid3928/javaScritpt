'use strict';

//* Object.seal() en JavaScript te permite hacer que un objeto sea "sellado", lo que significa que no puedes agregar ni eliminar propiedades, pero aún puedes modificar las propiedades existentes. Aquí tienes un ejemplo:

// Crear un objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
};

// Sellar el objeto
Object.seal(persona);

// Intentar modificar una propiedad existente
persona.nombre = 'Ana'; // Esto funcionará

// Intentar agregar una nueva propiedad
persona.direccion = '123 Calle Principal'; // Esto no funcionará

// Intentar eliminar una propiedad
delete persona.edad; // Esto tampoco funcionará

// El objeto persona aún se puede modificar
console.log(persona); // {nombre: "Ana", edad: 30}

//* Como puedes ver, después de sellar el objeto persona, no puedes agregar ni eliminar propiedades, pero aún puedes modificar las propiedades existentes.

//* Diferencia clave entre Object.freeze() y Object.seal():

//& Object.freeze(): Hace que el objeto sea completamente inmutable, no puedes modificar sus propiedades existentes ni agregar nuevas propiedades.Además, congelará objetos anidados.

//& Object.seal(): Permite modificar las propiedades existentes de un objeto, pero no puedes agregar ni eliminar propiedades. Los objetos anidados también pueden ser modificados.
