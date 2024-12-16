//* Puedes crear funciones dentro de objetos. Estas funciones se llaman métodos. Los métodos son útiles para encapsular la lógica relacionada con el objeto y permiten que el objeto realice acciones o cálculos. Aquí tienes un ejemplo simple de cómo definir y utilizar una función en un objeto:

// Definir un objeto llamado "persona" con propiedades y un método
const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function () {
        console.log('Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.');
    },
};

// Llamar al método "saludar" del objeto "persona"
console.log(persona.saludar()); // Esto mostrará "Hola, mi nombre es Juan y tengo 30 años." en la consola.

//* Creamos un objeto llamado persona con dos propiedades: nombre y edad.Definimos un método llamado saludar dentro del objeto persona. Este método imprime un mensaje utilizando las propiedades del objeto (this.nombre y this.edad).

//* Luego, llamamos al método saludar usando la notación de punto(persona.saludar()), lo que provoca que el objeto persona ejecute su función saludar y muestre el mensaje en la consola.

//* Este es un ejemplo simple de cómo puedes usar funciones en objetos en JavaScript para encapsular la lógica relacionada con ese objeto. Puedes acceder a las propiedades del objeto dentro del método utilizando this.
