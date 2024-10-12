//* Los operadores de comparación en JavaScript se utilizan para comparar dos valores y devolver un valor booleano (true o false) que indica si la comparación es verdadera o falsa. Aquí tienes una lista de los operadores de comparación más comunes:

//* Igual (==): Compara si dos valores son iguales, pero no verifica el tipo de datos. Esto significa que puede realizar comparaciones entre tipos de datos diferentes.
5 == '5'; // true, porque los valores son iguales, aunque uno sea un número y el otro una cadena de texto.

//* Igual estricto(===): Compara si dos valores son iguales y también verifica si son del mismo tipo de datos.Es preferible usar este operador para evitar resultados inesperados debido a la conversión de tipos.
5 === '5'; // false, porque los valores son iguales, pero los tipos de datos son diferentes.

//* Distinto(!=) y Distinto estricto(!==): Son los opuestos de los operadores de igualdad. != verifica si dos valores no son iguales, mientras que !== verifica si dos valores no son iguales y tienen tipos diferentes.
5 != '5'; // false, porque los valores son iguales.
5 !== '5'; // true, porque los valores son iguales, pero los tipos de datos son diferentes.

//* Mayor que(>) y Mayor o igual que(>=): Estos operadores se utilizan para comparar si un valor es mayor o mayor o igual que otro valor.
10 > 5; // true, porque 10 es mayor que 5.
10 >= 10; // true, porque 10 es igual a 10.

//* Menor que(<) y Menor o igual que(<=): Estos operadores se utilizan para comparar si un valor es menor o menor o igual que otro valor.
3 < 8; // true, porque 3 es menor que 8.
5 <= 5; // true, porque 5 es igual a 5.

//* Operadores de Comparación de Cadenas de Texto: También puedes comparar cadenas de texto utilizando los operadores de comparación. La comparación se realiza en función del orden alfabético.

'manzana' < 'naranja'; // true, porque "manzana" viene antes que "naranja" en orden alfabético.

//* Estos son los operadores de comparación más comunes en JavaScript. Puedes utilizarlos para realizar comparaciones en tus programas y tomar decisiones basadas en esas comparaciones. Recuerda que los resultados de las comparaciones son valores booleanos (true o false) que puedes utilizar en estructuras condicionales como if, else, y switch para controlar el flujo de tu programa.
