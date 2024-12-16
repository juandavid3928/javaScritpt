//* El destructuring de objetos dentro de otro objeto te permite extraer propiedades anidadas de un objeto principal en JavaScript de una manera más sencilla y concisa. Aquí tienes un ejemplo: Supongamos que tienes un objeto llamado persona que contiene información personal, y dentro de ese objeto, también tienes un objeto llamado dirección con detalles de la dirección. Aquí tienes cómo puedes usar la destructuración para acceder a las propiedades dentro del objeto anidado:

const persona = {
	nombre: 'Juan',
	edad: 30,
	direction: {
		calle: '123 Calle Principal',
		ciudad: 'Ciudad Ejemplo',
		codigoPostal: '12345',
	},
};

// Destructuring para extraer propiedades de 'persona' y 'direccion'
const {
	nombre,
	edad,
	direction: { calle, ciudad },
} = persona;

console.log(nombre); // Imprime 'Juan'
console.log(edad); // Imprime 30
console.log(calle); // Imprime '123 Calle Principal'
console.log(ciudad); // Imprime 'Ciudad Ejemplo'

//* En este ejemplo, usamos la destructuración para extraer las propiedades nombre y edad directamente del objeto persona, y también usamos la destructuración anidada para extraer las propiedades calle y ciudad del objeto dirección dentro de persona. Ten en cuenta que puedes asignar nombres diferentes a las propiedades extraídas si lo deseas. Por ejemplo:

const {
	nombre: nombrePersona,
	edad: edadPersona,
	direction: { calle: calleDireccion, ciudad: ciudadDireccion },
} = persona;

console.log(nombrePersona); // Imprime 'Juan'
console.log(edadPersona); // Imprime 30
console.log(calleDireccion); // Imprime '123 Calle Principal'
console.log(ciudadDireccion); // Imprime 'Ciudad Ejemplo'
