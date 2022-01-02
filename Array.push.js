//La inserción de matriz se utiliza para agregar elementos al final de una matriz. Entonces, si quisiéramos agregar una tercera mascota a esta matriz de mascotas, simplemente podríamos llamar a pets.push y luego proporcionar un valor. 

let pets = ['Cat', 'Dog']

pets.push('Hamster')

console.log(pets) // [ 'Cat', 'Dog', 'Hamster' ]

let wishlist = ['Hamster', 'Horses', 'Snake']
pets.push.apply(pets, wishlist)
console.log(pets) // [ 'Cat', 'Dog', 'Hamster', 'Hamster', 'Horses', 'Snake' ]

//Ahora, para fusionar estas dos matrices, podemos llamar a apply en el método push, pasar mascotas como contexto y luego la lista de deseos. 
