
//Indexof se utiliza para buscar en un arreglo un valor particular

let family = ['Rodrigo', 'Rafa', 'Rebeca', 'Rafael', 'Irene', 'Rina']
console.log(family.indexOf('Rebeca')) // 2
console.log(family.indexOf('Rina')) //* -1 --> -1 siempre se devuelve desde indexof cuando falla la búsqueda.

//Si necesita realizar una acción en función de si un elemento ya existe o no en un arreglo, puede verificar el valor de indexof. 
//*Si está por encima de -1, sabe que el elemento existe. 
//Puede guardar la validacion como disponible. 
//*Diremos que rinaExiste es igual al índice de comprobación mayor que -1. Esta expresión devolverá verdadero o falso en función de si Rina ya existe o no.

let rinaExiste = family.indexOf('Rina') > -1
console.log(rinaExiste) // false

if (!rinaExiste) {
    family.push('rina')
}

console.log(family) //[ 'Rodrigo', 'Rafa', 'Rebeca', 'Rafael', 'Irene', 'rina' ]

//Indexof tiene un segundo parámetro, que es la posición de inicio de la búsqueda. Si agregamos a Rina nuevamente aquí, y ejecutamos esto como antes, obtenemos 5. ¿Pero debería estar en otra posición en el arreglo? Digamos segundo. Proporcionamos una posición de inicio para la búsqueda que es 2. Ahora obtenemos -1. Esto se debe a que especificar 2 aquí inicia la búsqueda en el índice 2, que es 0->1->2, por lo que solo se buscan ultimos 4 elementos.
let family2 = ['Rodrigo', 'Rina', 'Rafa', 'Rebeca', 'Rafael', 'Irene']
console.log(family2.indexOf('Rina', 2)) // -1

let rod = {
    name: 'Rodrigo'
}
let rina = {
    name: 'Rina'
}
let rafa = {
    name: 'Rafa'
}

let family3 = [rod, rina, rafa]
console.log(family3.indexOf(rina)) // 1

//cómo utilizar indexof para crear un filtro. Filtraremos este arreglo de eventos en función de si la extensión de alguno de estos archivos coincide o no con algo de la whitelist. Tenemos CSS y JS aquí. Queremos que el resultado sea un arreglo que contenga estos dos y no html.

//Si configuramos una nueva variable llamada filtrada y luego llamamos a events.filter, podemos usar el //* módulo de ruta para obtener la extensión del archivo. Luego, para verificar si este elemento es parte de la lista blanca y, por lo tanto, debería estar permitido en los resultados filtrados, simplemente devolvemos el índice de la lista blanca de extensión mayor que -1.

let whitelist = ['.css', '.js']

let events = [
    {
        file: 'css/core.css'
    },
    {
        file: 'js/app.js'
    },
    {
        file: 'index.html'
    }
]

let filtered = events.filter((elem) =>{
    let ext = require('path').extname(elem.file) 
    console.log(ext)//.css .js .html
    console.log(whitelist.indexOf(ext)) // 0  1  -1
    return whitelist.indexOf(ext) > -1
})

//indexof devuelve -1 si no existe, y cualquier valor desde 0 y hacia arriba si existe. Este método de filtro ahora solo permitirá la entrada de elementos que tengan extensiones que coincidan con la lista blanca. Si cerramos la sesión, podemos ver que ese es el caso.
