// Array.prototype.cooncat()
//Concat es un método al que llamas en una matriz existente y te devuelve una nueva matriz que tiene la original, más los parámetros que pasas aquí. Veamos esto en acción. Si creamos una matriz con dos elementos y queremos agregarle un tercer elemento, podemos usar concat. 
let items = [1,2];
let  newItems = items.concat(3);//[ 1, 2, 3 ]
console.log(newItems)

newItems = items.concat(3,4,5, "String", undefined); //[ 1, 2, 3, 4, 5, 'String', undefined ]
console.log(newItems)


// Estamos diciendo que los elementos nuevos son iguales a los elementos que concatenan tres. Items es la matriz original.

/*Todas las matrices tienen un método concat que toma una copia de esta matriz original, le agrega cualquier parámetro que pase aquí y*/ //? devuelve una nueva matriz. Si registramos esto en la consola, deberíamos ver uno, dos y tres.

newItems = items.concat([3,4],[5,7]); //[ 1, 2, 3, 4, 5, 7 ]
console.log(newItems)

//*concat analiza todos y cada uno de los arreglos y, si es una matriz, extraerá cada valor de esa matriz y lo agregará al original. Esto también funciona con varios arreglos.
newItems = items.concat([3,4],[5,7,[8,9]]); //[ 1, 2, 3, 4, 5, 7, [8, 9]]
console.log(newItems)

//? Aplicacion
let people = [
    {
        name: "Rodrigo"
    },
    {
        name: "Carlos Padilla"
    }
];
let people2 = [
    {
        name: "Mike"
    },
    {
        name: "Edgar"
    }
];

people.concat(people2).forEach((elem) =>{
    console.log(elem.name) //* Rodrigo Carlos Mike Edgar
})