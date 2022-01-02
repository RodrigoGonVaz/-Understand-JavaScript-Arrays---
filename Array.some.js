//Array Some acepta una función como su primer parámetro. Comenzará a llamar a esta función una vez por cada elemento de esta matriz de origen. Si alguna de esas llamadas a funciones arroja un valor verdadero, Some devolverá verdadero. Entonces, en este ejemplo, donde nuestra matriz de origen tiene cinco elementos, llamamos a Some en la matriz de elementos, elem será igual a cada elemento de esta matriz. Entonces, primero 1, luego 2, luego 3. En la primera llamada, elem será igual a 1.
//Esta expresión devolverá falso, así que pasaremos al siguiente elemento. X se vuelve igual a 2, esto devuelve falso nuevamente, pasamos al siguiente. Cuando pasamos al tercer elemento, esta expresión ahora será verdadera, por lo que el proceso se detiene y Some devuelve el valor verdadero, que asignamos a la variable has3

let items = [1,2,3,4,5]
let hasThree = items.some(elem => elem === 3)

console.log(hasThree) //* true

//Practica

let tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Watch the array lessons on egghead.io',
        completed: true
    }
];

let list = document.querySelector('.task-list')
list.classList.add(
        tasks.some(task => task.completed === false)
        ? 'task-list--uncompleted'
        : 'task-list--completed'
);

list.innerHTML = tasks
   .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
   .map(x => `<li>${x}</li>`)
   .join('');