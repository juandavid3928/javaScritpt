//* Object.keys() se utiliza para obtener un array de las claves (propiedades) de un objeto. Aquí tienes un ejemplo:

const persona = {
	nombre: 'Juan',
	edad: 30,
	ciudad: 'Madrid',
};

const keys = Object.keys(persona);

console.log(keys); // Devuelve ["nombre", "edad", "ciudad"]
Object.values();

//* Object.values() se utiliza para obtener un array de los valores de las propiedades de un objeto. Aquí tienes un ejemplo:

const persona2 = {
	nombre: 'Juan',
	edad: 30,
	ciudad: 'Madrid',
};

const values = Object.values(persona2);

console.log(values); // Devuelve ["Juan", 30, "Madrid"]
Object.entries();

//* Object.entries() se utiliza para obtener un array de arrays, donde cada subarray contiene un par clave-valor del objeto. Aquí tienes un ejemplo:

const persona3 = {
	nombre: 'Juan',
	edad: 30,
	ciudad: 'Madrid',
};

const entries = Object.entries(persona3);

console.log(entries);
// Devuelve [["nombre", "Juan"], ["edad", 30], ["ciudad", "Madrid"]]

//* Puedes utilizar estos métodos para realizar diversas operaciones en objetos, como recorrer propiedades o realizar transformaciones de datos de manera más eficiente. ¡Espero que estos ejemplos te hayan ayudado a comprender cómo funcionan Object.keys(), Object.values() y Object.entries() en JavaScript! Si tienes más preguntas o necesitas más ejemplos, no dudes en preguntar.
