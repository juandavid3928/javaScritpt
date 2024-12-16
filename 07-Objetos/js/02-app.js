//* Formas de acceder a las propiedades de un objeto: Notación de Punto: Esta es la forma más común y fácil de acceder a las propiedades de un objeto cuando conoces el nombre de la propiedad:
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'EjemploVilla',
};

console.log(persona.nombre); // Muestra "Juan"
console.log(persona.edad); // Muestra 30

//* Notación de Corchetes: Puedes acceder a las propiedades utilizando corchetes y el nombre de la propiedad como una cadena:
let propiedad = 'nombre';
console.log(persona[propiedad]); // Muestra "Juan"

//* Método Object.keys(): Si deseas obtener un array con todas las propiedades de un objeto y luego acceder a ellas por índice, puedes usar el método Object.keys():

//* const propiedades = Object.keys(persona);
console.log(persona[propiedad[0]]); // Muestra "Juan"

//* Método Object.entries(): Si necesitas tanto las claves como los valores de las propiedades de un objeto, puedes utilizar Object.entries():
for (let [clave, valor] of Object.entries(persona)) {
    console.log(clave + ': ' + valor);
}
