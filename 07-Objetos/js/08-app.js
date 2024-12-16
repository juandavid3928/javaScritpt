'use strict';
//* Al congelar un objeto, este se vuelve inmutable, lo que significa que no puedes agregar, eliminar o modificar sus propiedades después de congelarlo. Aquí tienes un ejemplo:

// Crear un objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
};

// Congelar el objeto
Object.freeze(persona);

// Intentar modificar una propiedad
persona.nombre = 'Ana'; // Esto no tendrá ningún efecto

// Intentar agregar una nueva propiedad
persona.direccion = '123 Calle Principal'; // Esto tampoco tendrá ningún efecto

// Intentar eliminar una propiedad
delete persona.edad; // Esto no funcionará

// El objeto persona seguirá siendo el mismo
console.log(persona); // {nombre: "Juan", edad: 30}

//* Como puedes ver en el ejemplo, después de congelar el objeto persona, no se pueden realizar cambios en sus propiedades. Esto es útil para asegurarte de que un objeto no cambie accidentalmente en tu código. Ten en cuenta que Object.freeze() actúa de forma superficial, lo que significa que si el objeto contiene propiedades que son objetos anidados, esos objetos anidados no se congelarán automáticamente.
