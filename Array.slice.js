
//El .slice de arreglos crea una copia superficial de un arreglo. En esta lección cubrimos, en detalle, qué es exactamente una copia 'superficial' y cómo puede hacer tropezar a la gente. Pasamos a ver ejemplos que muestran cómo copiar solo el primer elemento, el último elemento e incluso cómo copiar una subsección de una matriz excluyendo el primero y el último.

let items = [1,2,3,4,5]
let copy = items.slice()

console.log(items) //[ 1, 2, 3, 4, 5 ]
console.log(copy) //[ 1, 2, 3, 4, 5 ]

copy.push(6)
console.log(copy) //[ 1, 2, 3, 4, 5, 6 ]

copy[0] = 100
console.log(copy) //[ 100, 2, 3, 4, 5, 6 ]

let person = {
    name: 'Rodrigo'
}
let items2 = [1, person]

let copy2 = items2.slice()
console.log(items2) //[ 1, { name: 'Rodrigo' } ]
console.log(copy2) //[ 1, { name: 'Rodrigo' } ]

//Modifica los dos al ser un objeto 
copy2[1].name = 'Mike'
console.log(items2) //[ 1, { name: 'Mike' } ]
console.log(copy2) //[ 1, { name: 'Mike' } ]

// .slice puede tomar 2 paramametros opcionales
//Si se coloca en .slice(0,1) --> solo toma el primer parametro = 1
let items3 = [1,2,3,4,5]
let copy3 = items3.slice(0,1) // [1]
let copy4 = items3.slice(0,2) // [ 1, 2 ]
let copy5 = items3.slice(0) // [ 1, 2, 3, 4, 5 ]
let copy6 = items3.slice(-1) // [ 5 ], empeiza del ultimo 
let copy7 = items3.slice(-2) // [ 4, 5 ]
let copy8 = items3.slice(1, -1) // [ 2, 3, 4 ] -> termina en el index -1


console.log(copy8)

//Practica:

let personas = {
    name: 'rodrigo-gonzalez'
}
let filter = {
    'deslugify': x => x.replace('-', ' '), // reemplaza - con un espacio
    'uppercase': x => x.toUpperCase() // Pone todos los caracteres en mayuscula
}

let input = 'name | deslugify | uppercase' // RODRIGO GONZALEZ resultado de los filtros

let sections = input.split('|').map(x => x.trim())
console.log(sections) // [ 'name', 'deslugify', 'toUpperCase' ]

let ref = personas[sections[0]]
console.log(ref) // rodrigo-gonzalez

let output = sections
    .slice(1) // ...'deslugify', 'toUpperCase' ]
    .reduce((prev, next) => {
    if (filter[next]) {
        return filter [next].call(null, prev)
    }
    return prev
}, ref) // Reduce empeiza con el valor de ref por lo tanto prev = ref y depues se ira moviendo el valor en el arreglo de sections en i = 1
console.log(output) // RODRIGO GONZALEZ