
//Array Sort ordena los elementos de una matriz en su lugar y devuelve la misma matriz. Si quisiéramos ordenar alfabéticamente esta matriz de nombres, simplemente podríamos llamar items.sort y luego Log Items.
let items = ['Rodrigo', 'Carolina', 'Olly', 'Ramon']

items.sort()
console.log(items) // [ 'Carolina', 'Olly', 'Rodrigo' ]

let numero = [30, 20, 2, 10]

numero.sort()
console.log(numero) // [ 10, 20, 30 ] - [ 10, 2, 20, 30 ] los compara en tipo string y no numero (Unicode)

//Para preformar una ordenación numérica en una matriz como esta, necesitamos proporcionar una función comparativa. Un comparador tiene A y B como elemento izquierdo y derecho del algoritmo de clasificación. Para ordenar esta matriz en orden ascendente, simplemente podemos proporcionar A menos B y obtenemos una ordenación correcta.

numero = [30, 20, 2, 10]

numero.sort((a, b) => a - b) 
console.log(numero) // [ 2, 10, 20, 30 ] | b - a [ 30, 20, 10, 2 ]

//Al proporcionar una función comparativa aquí, se hace cargo de cómo se comparan dos valores con cada uno. Mientras que anteriormente, estos números se convertían primero en strings, dentro de nuestra función comparativa, solo obtenemos los valores brutos, y eso nos permite simplemente restar B de A, y devolver el resultado de esa resta a las funciones comparativas, que luego es se utiliza para determinar qué acción se debe tomar en el artículo actual.


//si vamos a tener una matriz de nombres, y queríamos ordenar esta matriz en función de la longitud del string. En este caso, cada valor dentro del comparador será un string. El string tienen una propiedad de longitud, por lo que podemos compararla.

let names = ['Rodrigo', 'Carolina', 'Olly', 'Ramon']

names.sort((a, b) => b.length - a.length) 
console.log(names) // [ 'Carolina', 'Rodrigo', 'Ramon', 'Olly' ]

//Verás, tenemos a Carolina al frente, ya que estamos usando B - A, lo que nos da un orden descendente. 


//Ahora veamos un ejemplo un poco más útil. Usemos una matriz de objetos, donde cada objeto representa una lección como título y un recuento de vistas. Queremos ordenar esta matriz en función de la cantidad de vistas, y luego pondré algo de HTML.
let lessons = [
    {
        title: 'Javascript Array methos in depth - contact',
        views: 1000
    },
    {
        title: 'Javascript Array methos in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript Array methos in depth - join',
        views: 1025
    },
]

let list = lessons
    .sort((a, b) => b.views - a.views) // 
    .map(x => `     <li>${x.title} (${x.views})</li>`)
    .join('\n') // significa new line

let output = `<ul>\n${list}\n</ul>`
console.log(output) 
/*<ul>
    <li>Javascript Array methos in depth - slice (1050)</li>
    <li>Javascript Array methos in depth - join (1025)</li>
    <li>Javascript Array methos in depth - contact (1000)</li>
</ul>*/

//Primero crearemos la lista ordenando las lecciones según la cantidad de vistas. Queremos que esté en orden descendente, para que el video más popular sea el primero. Llamaremos b.views - a.views. Esto nos devolverá una matriz en la que podemos llamar a map. Luego, simplemente devolveremos una cadena de plantilla. 

//En resumen, tomamos el arreglo de lecciones. Proporcionamos una función comparativa para el método de sort, que clasifica cada lección en función de la cantidad de vistas que tiene. Sort nos devuelve el mismo arreglo, aunque ahora modificada.

//Luego llamamos map, que se llama para cada elemento de la matriz. Aplicamos un poco de relleno, solo por el bien de la salida aquí. Luego accedemos al título y la vista. Los unimos con un carácter de nueva línea, y luego lo colocamos entre un <ul>, con algunos caracteres de nueva línea, lo que produce esta salida.
