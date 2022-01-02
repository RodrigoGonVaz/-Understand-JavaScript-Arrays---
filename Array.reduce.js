

//Si quisiéramos crear una suma de todos estos números, tomaríamos esta matriz de elementos, llamaríamos a reduce, pasaríamos una función de devolución de llamada que tiene dos parámetros, el valor anterior y el elemento actual que estamos viendo.

let items = [1,2,3,4,5]
let sum = items.reduce((prev, item) => prev + item)

console.log(sum) //15

//Devolvemos el resultado de sumar el valor anterior y el valor actual juntos. 

let items2 = [1,2,3,4,5]
let sum2 = items2.reduce((prev, item) => {
    console.log('prev', prev, 'item', item)
    return prev + item
},0) //<--0 is the seed

console.log(sum2) /* 
prev 1 item 2
prev 3 item 3
prev 6 item 4
prev 10 item 5
15 */ 
/* ||  prev 0 item 1
prev 1 item 2
prev 3 item 3
prev 6 item 4
prev 10 item 5
15 */

let albums = [
    {
        title: 'Holiday in Spain',
        images: ['01.jpg', '02.jpg']
    },
    {
        title: 'House Renovation',
        images: ['03.jpg', '04.jpg', '05.jpg']
    },
]

const numImages = albums.reduce((prev, album) => {
    return prev + album.images.length
},0)

console.log(numImages) //5

const images = albums.reduce((prev, album) => {
    return prev.concat(album.images)
},[])

console.log(images) // [ '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg' ]

//Practica 3

const users = [
    {
        id: '01',
        name: 'Shane'
    },
    {
        id: '02',
        name: 'Sally'
    }
];

const newUsers = users.reduce((prev, user) => {
    prev[user.id] = user;
    return prev;
}, {});

console.log(newUsers) /* {
    '01': { id: '01', name: 'Shane' },
    '02': { id: '02', name: 'Sally' }
  } */
console.log(newUsers['02'].name) // Sally