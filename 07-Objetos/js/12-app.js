//* funciones constructoras son una forma de crear objetos con propiedades y métodos comunes. Aquí tienes un ejemplo simple de cómo crear y usar un objeto constructor en JavaScript:

// Definimos una función constructora llamada "Persona"
function Persona(nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;

	// Método para saludar
	this.saludar = function () {
		console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
	};
}

// Creamos dos instancias (objetos) de la función constructora "Persona"
let persona1 = new Persona('Juan', 30);
let persona2 = new Persona('María', 25);

// Accedemos a las propiedades y llamamos al método de los objetos
console.log(persona1.nombre); // Juan
console.log(persona2.edad); // 25

persona1.saludar(); // Hola, soy Juan y tengo 30 años.
persona2.saludar(); // Hola, soy María y tengo 25 años.

//* Definimos una función constructora Persona que toma dos parámetros, nombre y edad, y asigna estos valores a propiedades nombre y edad del objeto que se creará a partir de esta función. También definimos un método saludar que muestra un mensaje de saludo usando las propiedades del objeto.

//* Creamos dos instancias de la función constructora Persona (persona1 y persona2) utilizando la palabra clave new. Accedemos a las propiedades (nombre y edad) y llamamos al método saludar de cada objeto creado.

//* Usar objetos constructores es útil cuando deseas crear múltiples objetos con la misma estructura y métodos. Cada objeto creado a partir de la función constructora tendrá sus propias propiedades, pero compartirá los mismos métodos definidos en la función constructora.
