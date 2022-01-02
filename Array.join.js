// La combinación de arreglos produce una cadena que es el resultado de sumar todos los elementos de una matriz.
//Así es como funciona join. Lo llamas en un arreglo existente. Pasas lo que quieres que sea ese //* pegamento o el separador.
//En nuestro caso, solo queremos un espacio vacío, por lo que pasamos una cadena con un espacio vacío. Ahí tienes el mismo resultado. La diferencia aquí es que ahora es completamente dinámico. No importa la cantidad de elementos en la matriz. Siempre funcionará.

let names = ["Rodrigo", "Gonzalez"];

console.log(names.join(' '));//Rodrigo Gonzalez
console.log(names.join('.'));//Rodrigo.Gonzalez
console.log(names.join(''));//RodrigoGonzalez
console.log(names.join('_'));//Rodrigo_Gonzalez
console.log(names.join());//Rodrigo,Gonzalez

let nameR = 'rodrigo gonzalez'

//let upper = nameR.split(' ').map(elem => elem.charAt(0).toUpperCase()) --> [ 'R', 'G' ]
//let upper = nameR.split(' ').map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)) --> [ 'Rodrigo', 'Gonzalez' ] El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. El método selecciona desde un comienzo dado, hasta un final dado (no incluido). (ejemplo: ['odrigo', 'onzalez'])
let upper = nameR.split(' ').map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))  

console.log(upper);//Rodrigo,Gonzalez
//Si en su lugar tuviéramos un nombre que ya era una cadena y quisiéramos poner en mayúscula cada letra aquí y devolver una cadena, primero podríamos dividir el nombre en cualquier espacio.
//Entonces podríamos mapear eso y 
//* .charAt(0) devolver el primer carácter en mayúsculas junto con el resto de la cadena en su forma normal. 
//? Luego, finalmente únalas nuevamente.
//1. Llamar a split en esto crea una matriz con Rodrigo y Gonzalez [Rodrigo, Gonzalez] en ella. 
//2. Luego, la función de mapa se ejecuta para cada elemento de esta matriz, lo que produce otra matriz con los elementos Rodrigo y Gonzalez [Rodrigo, Gonzalez]. 
//3. Finalmente, llamar a join en esto usando un espacio vacío crea esta cadena.
