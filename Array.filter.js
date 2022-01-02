/* Array.filter crea una nueva matriz. Para ello, llama a una función que proporcionas como primer argumento con cada elemento de la matriz de origen. Luego mira el valor de retorno de esa llamada a la función.

Si es un valor truthy, como un número, una cadena o verdadero, entonces el elemento actual que estamos viendo lo incluirá en la matriz filtrada. Sin embargo, si la llamada a la función devuelve un valor y falso, el elemento se descarta.*/

let items = [1, 2, 3, 4, 5]
let filtered = items.filter(elem => elem > 3)

console.log(filtered) //[ 4, 5 ]

//Practica

let people = [
    {
        name: 'Rodrigo',
        pets: ['dog', 'cat']
    },
    {
        name: 'Carolina',
        pets: ['dog', 'horse']
    },
    {
        name: 'Robert',
        pets: []
    },
]

let filtered2 = people.filter(elem => elem.pets.length) // si la propiedad pets no existe en alguno de los objetos, solo ponemos elem.pets ya que da undefined en el metodo filter
console.log(filtered2)/* 
[
    { name: 'Rodrigo', pets: [ 'dog', 'cat' ] },
    { name: 'Carolina', pets: [ 'dog', 'horse' ] }
] */

const lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Functions in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

const minViews = 1000;
const searchTerm = 'array';

const filtered3 = lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1) // si no existe en indexOf es -1
    .filter(x => x.views > minViews)
    .sort((a, b) => b.views - a.views)
    .map(x => `  <li>${x.title}</li>`)
    .join('\n');

console.log(`<ul>${filtered3}</ul>`) /*
<ul>  
    <li>Javascript Arrays in Depth - slice</li>
    <li>Javascript Arrays in Depth - concat</li>
</ul>
*/

/* Lo primero que queremos hacer es eliminar todo lo que no esté en la categoría de 'array'. Podemos hacerlo simplemente diciendo "x.tags índice del término de búsqueda mayor que -1".
Entonces podemos filtrar de nuevo. Esta vez, solo queremos elementos que tengan un recuento de vistas mayor que nuestra variable de vistas mínimas, que es 1,000. 
Queremos cambiar el orden de los resultados para que el más popular sea el primero. Podemos llamar sort, proporcionar una función comparativa. Queremos que estén en orden descendente. Podemos decir "b.views - a.views".
Después de esto, podemos llamar a map, proporcionar un flujo de plantilla y poner un poco de HTML aquí. Podemos usar la propiedad del título. Luego, finalmente, únala con un carácter de nueva línea.*/

//*Para recapitular, comenzamos con una serie de objetos como este. Primero filtramos cualquier elemento que no contenga nuestro término de búsqueda en el arreglo de tags llamando a index of y verificando que su valor sea mayor que -1, lo que significa que existe en el arreglo.

//**Llamamos filtro de nuevo. Verificamos que el recuento de vistas sea mayor que la variable de vistas mínimas que establecimos. Luego ordenamos los resultados usando una ordenación numérica.

//En este punto, solo tenemos el arreglo de dos elementos. Llamamos mapa a eso, que devuelve una cadena de HTML. Luego los unimos con un carácter de nueva línea. Esto es solo para fines de visualización aquí.

