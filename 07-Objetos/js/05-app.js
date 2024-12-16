//* Anidar objetos. Aquí tienes un ejemplo sencillo para entender cómo crear y acceder a objetos dentro de otros objetos:

// Creamos un objeto principal llamado 'persona'
let persona = {
	nombre: 'Juan',
	edad: 30,
	direction: {
		calle: 'Calle Principal',
		ciudad: 'Ciudad Ejemplo',
		codigoPostal: '12345',
	},
};

// Acceder a propiedades del objeto principal
console.log(persona.nombre); // Imprime "Juan"
console.log(persona.edad); // Imprime 30

// Acceder a propiedades del objeto 'dirección' dentro del objeto principal

console.log(persona.direction.calle); // Imprime "Calle Principal"
console.log(persona.direction.ciudad); // Imprime "Ciudad Ejemplo"
console.log(persona.direction.codigoPostal); // Imprime "12345"

//* En este ejemplo, hemos creado un objeto llamado 'persona' que contiene otra objeto llamado 'direccion'. Puedes acceder a las propiedades del objeto anidado utilizando la notación de punto (por ejemplo, persona.direction.calle) para acceder a la calle de la dirección de la persona. También puedes modificar las propiedades de objetos anidados de la misma manera:

// Modificar la calle de la dirección
persona.direction.calle = 'Nueva Calle';
console.log(persona.direction.calle); // Imprime "Nueva Calle"

//* De esta manera, puedes trabajar con objetos anidados en JavaScript. ¡Espero que este ejemplo te haya sido útil para comprender cómo funcionan los objetos dentro de otros objetos en JavaScript!
