//* La diferencia entre funciones y métodos en JavaScript es fundamental:

//* 1) Una función en JavaScript es un bloque de código reutilizable que realiza una tarea específica. Puedes declarar una función utilizando la palabra clave function, seguida de un nombre y un par de paréntesis (). Ejemplo:

function saludar() {
    console.log('¡Hola!');
}

//* Luego, puedes llamar a una función usando su nombre seguido de paréntesis. Ejemplo:

saludar(); // Llama a la función saludar y muestra "¡Hola!" en la consola.

//* Las funciones pueden aceptar parámetros(valores de entrada) y pueden devolver un resultado mediante la palabra clave return.

//* 2) Un método es una función que está asociada a un objeto. Los objetos en JavaScript tienen propiedades y métodos. Para acceder a un método, primero debes tener una referencia al objeto y luego utilizar la notación de punto (objeto.metodo()) para invocarlo. Ejemplo: Métodos:

const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function () {
        console.log('Hola, mi nombre es ' + this.nombre);
    },
};

//* Luego, puedes llamar al método de un objeto de esta manera:

persona.saludar(); // Muestra "Hola, mi nombre es Juan" en la consola.

//* Los métodos pueden acceder a las propiedades del objeto utilizando this, como se muestra en el ejemplo.

//& En resumen, la principal diferencia radica en el contexto en el que se utilizan. Las funciones son bloques de código independientes
//& que puedes llamar en cualquier momento, mientras que los métodos son funciones asociadas a objetos específicos y se invocan en el
//& contexto de ese objeto.
