// fecha de informacion
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// contenedor de tareas
const tasksContainer = document.getElementById('tasksContainer');

/*creamos una funcion que va a servir para setear la fecha,
usaremos setDate: nos lo proporciona el mismo JavaScript para
obtener la fecha actual*/
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });//dia de la fecha
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });//semana
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });//mes
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });//año
};

//agregar una nueva tarea

const addNewTask = event => {
    event.preventDefault();// para que en form no use admit y nos quiera llevar a otra pagina, con esto lo evitamos
    const { value } = event.target.taskText;// podemos acceder al taskText a traves de target
    if(!value) return;// el return hace que se corte la ejecucion de esta funcion
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');// le agregamos 2 clases, "task para dar estilos propios cuando trabajemos con el css", "roundBorder para dar border redondeos"
    task.addEventListener('click', changeTaskState)// cuando le demos click llamemos a la funcion changeTaskState
    task.textContent = value;//esto es para agregar lo que puso el usuario, el texto
    tasksContainer.prepend(task);// esto es oara que cada elemento se agregue arriba de todo
    event.target.reset(); // esto es para resetear y nos quede vacio el input
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => { //crearemos dos arrays
    const done = []; // uno es "tareas hechas"
    const toDo = []; // este es "tareas por hacer"
    tasksContainer.childNodes.forEach( el => { //iremos al elemento taskcontainer y accderemos a cada uno de los hijos de tasksContainer y utilizaremos un forEach que va a iterar todos estos elementos
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();
