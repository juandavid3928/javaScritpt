//* El destructuring de objetos es una característica útil en JavaScript que te permite extraer valores de objetos y asignarlos a variables de una manera más concisa y legible. Aquí tienes un ejemplo sencillo de cómo funciona:

// Supongamos que tenemos un objeto con datos de una persona
const persona = {
	nombre: 'Juan',
	edad: 30,
	ciudad: 'Madrid',
};

// Usando destructuring para extraer valores del objeto
const { nombre, edad, ciudad } = persona;

// Ahora podemos usar las variables nombre, edad y ciudad
console.log(nombre); // Resultado: Juan
console.log(edad); // Resultado: 30
console.log(ciudad); // Resultado: Madrid

//* En este ejemplo, hemos creado un objeto persona con tres propiedades: nombre, edad y ciudad. Luego, utilizamos la sintaxis de destructuring {} para extraer los valores de estas propiedades en las variables correspondientes nombre, edad y ciudad. Esto nos permite acceder a los valores del objeto de manera más directa y legible. Puedes personalizar los nombres de las variables de destino si lo deseas:

const { nombre: fullName, edad: age, ciudad: city } = persona;

console.log(fullName); // Resultado: Juan
console.log(age); // Resultado: 30
console.log(city); // Resultado: Madrid

//* En este caso, hemos asignado los valores de las propiedades del objeto a variables con nombres diferentes (fullName, age y city). Esto puede ser útil si deseas utilizar nombres de variables diferentes a las propiedades del objeto original.
