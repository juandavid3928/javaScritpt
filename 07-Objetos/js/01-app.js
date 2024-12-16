//* Son estructuras de datos que te permiten almacenar y organizar información de una manera más compleja que las variables simples. Los objetos se componen de pares clave-valor, donde cada clave es una cadena (también llamada "propiedad") que actúa como un identificador único para un valor asociado. Aquí tienes un ejemplo sencillo:

// Creación de un objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
    direction: {
        direction: 'Cll 44 #103',
        ciudad: 'EjemploVilla',
    }

};

// Acceso a las propiedades del objeto
console.log(persona.nombre); // Muestra "Juan"
console.log(persona.edad); // Muestra 30
console.log(persona.direction.ciudad); // Muestra "EjemploVilla"

//* En este ejemplo, hemos creado un objeto llamado persona con tres propiedades: nombre, edad y ciudad. Luego, hemos accedido a estas propiedades utilizando la notación de punto (objeto.propiedad) y hemos impreso sus valores en la consola.También puedes acceder a las propiedades utilizando la notación de corchetes:

console.log(persona['nombre']); // Muestra "Juan"

//* Además, puedes agregar nuevas propiedades a un objeto o modificar las existentes de la siguiente manera:

persona.profession = 'Programador'; // Agregar una nueva propiedad
persona.edad = 31; // Modificar una propiedad existente

console.log(persona);
