//*  Los objetos aunque se construye con const se pueden modificar

const persona = {
	nombre: 'Juan',
	edad: 30,
	ciudad: 'EjemploVilla',
};

persona.nombre = 'David';

console.log(persona.nombre);
