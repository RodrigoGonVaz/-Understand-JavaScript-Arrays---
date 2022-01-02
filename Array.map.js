

//El array.map crea una nueva matriz que tiene la misma longitud que la original. Llamará a la función que proporciones aquí una vez para cada elemento en la matriz de origen, y usará el valor de retorno para construir la nueva matriz. 


let items = [1,2,3,4,5]
let mapped = items.map( function (elem){
    return elem * 2
})
console.log(mapped) // [ 2, 4, 6, 8, 10 ]

//Ahora, es importante entender que no importa lo que devuelva de esta función, la nueva matriz siempre tendrá cinco elementos.
//Incluso si eliminamos el cuerpo de esta función por completo, lo que haría que esta función regresara indefinida, y registramos que esa es la consola, puedes ver que obtenemos una matriz de cinco valores indefinidos.


let items2 = ['1','2','3','4','5']
let mapped2 = items2.map( function (elem){
    return Number(elem)
})
console.log(mapped2) // [ 1, 2, 3, 4, 5 ]


let items3 = ['Rodrigo  ', '  Caro']
const mapped3 = items3.map(elem => elem.trim())

console.log(mapped3) // [ 'Rodrigo', 'Caro' ]


let names = ['Rodrigo', 'Caro']
const mapped4 = names.map(function (name){
    return {
        firstname: name
    }
})

console.log(mapped4) // [ { firstname: 'Rodrigo' }, { firstname: 'Caro' } ]
//Crearemos la propiedad de primer nombre y la estableceremos igual a nombre, y luego lo registraremos en la consola. Ahora puede ver que la nueva matriz contiene dos objetos, con el nombre establecido como propiedad de primer nombre.

const items4 = [
    {
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
];

let mapped5 = items4.map(elem => {
    return {
        firstname: elem.firstname,
        lastname: elem.lastname,
        fullname: elem.firstname + ' ' + elem.lastname,
    }
}) 

mapped5.forEach(function(person){
    console.log(person.fullname) //Shane Osbourne   Sally Osbourne
})

// Siempre que tenga una matriz de objetos, y en lugar de eso desee una matriz simple de un valor de cada objeto, esto es todo lo que necesita. 
const items6 = [
    {
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
];

let mapped6 = items6.map(elem => elem.firstname)
console.log(createHtmlList(mapped6)) /* 
<ul>
    <li>Shane</li>
    <li>Sally</li>
</ul>*/

function createHtmlList (param){
    const listElements = param.map(elem => `  <li>${elem}</li>`).join('\n')
    return `<ul>\n${listElements}\n</ul>`
}

//Para mostrar el mapa junto con otros métodos de matriz, supongamos que tenemos una aplicación de chat y queremos enumerar los usuarios que están actualmente activos. Agregaremos una propiedad activa a cada persona y luego agregaremos una tercera persona que configuraremos como inactiva. 

const chat = [
    {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        active: true,
        firstname: 'Rod',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
    }
];

const mapped7 = chat
    .filter(x => x.active)
    .map(x => x.firstname);

function createHtmlList(items) {
    const listElements = items.map(x => ` <li>${x}</li>`).join('');
    return `<ul>${listElements}</ul>`;
}

console.log(createHtmlList(mapped7))

//Esto es extremadamente simple. Aquí lo llamamos filtro. Y debido a que llamamos a filter antes de hacer el mapeo, todavía tenemos acceso a cada objeto completo. Debido a que el método de filtro espera un valor verdadero o falso, podemos devolver x.active. 

//Este es el poder real, porque mira lo declarativo que es. Tomamos la matriz de elementos y la filtramos en función de si la propiedad activa está configurada como verdadera o no. Eso omitirá este objeto. Cuando lleguemos a esta línea, solo tendremos estos dos elementos.

// Entonces llamar a map aquí va a crear una matriz que tiene a Shane y Sally en ella. Eso significa que cuando finalmente llamamos a esta función, no tenemos que preocuparnos por esta persona porque está excluida más arriba en la cadena.