

//El método every devuelve verdadero o falso en función de si todos los elementos de esta matriz de origen pasan una condición que proporcionamos aquí como valor de retorno de esta función. En este ejemplo tenemos cinco elementos, lo que significa que esta función se ejecutará cinco veces. elem se volverá igual a uno. Luego dos, tres, cuatro, luego cinco. Debido a que todos esos elementos son menos de 10, esto devolverá verdadero, que establecemos en el resultado y lo registramos en la consola, que puede ver aquí.

let items = [1,2,3,4,5]
let result = items.every(elem => elem < 10)

console.log(result) //true

//Ahora, si tuviéramos que cambiar esto para que sea cinco, entonces ahora estamos diciendo, "¿Todos los elementos de nuestra matriz son menos de cinco?" O puede ver que los primeros cuatro obviamente lo son, pero este último no lo es. En la quinta ejecución, esto devolverá falso, lo que hará que cada método devuelva falso. Deberíamos ver eso si lo registramos en la consola, lo cual hacemos.

let items2 = [1,2,3,4,5]
let result2 = items2.every(elem => elem < 5)

console.log(result2) // false


let items3 = ['1','2','3','4','5']
let result3 = items3.every(elem => typeof elem === 'string')

console.log(result3) // true

//Practica

let fields = [
    {
        field: 'email',
        value: 'rodrigo@rod.com',
        errors: []
    },
    {
        field: 'name',
        value: '',
        errors: ['No name provided']
    },
]

let isValid = fields.every(elem => elem.errors.length === 0)
console.log(isValid) // false

//Practica 2

var videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 420,
        viewed: 360
    }
];

function complete(x) {
    return x.viewed === x.length;
}

var isComplete = videos.every(complete);
var completed = videos.filter(complete);

console.log(isComplete) //false


console.log(completed)
/*
[
  { title: 'Array methods in depth: concat', length: 310, viewed: 310 }
]
*/