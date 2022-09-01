const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {
    1656471929458: {
        id: 1656471929458,
        texto: 'Tarea #1',
        estado: false
    },
    1656472195327: {
        id: 1656472195327,
        texto: 'Tarea #2',
        estado: false
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pintarTareas()
})

listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

//console.log(Date.now())

formulario.addEventListener('submit', e => {
    e.preventDefault()
    //console.log(e.target[0].value)
    
    setTarea(e)
})

const setTarea = e => {
    if(input.value.trim() === ''){
        console.log('esta vacio')
        return
    }
//    console.log('diste click')

    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false

    }
    tareas[tarea.id] = tarea
    console.log(tareas)
    formulario.reset()
    input.focus()//para que siempre este marcado el formulario para escribir
    
    pintarTareas()
}

const pintarTareas = () => {
    listaTarea.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTarea.appendChild(fragment)
}

const btnAccion = e => {
    //console.log(e.target.classList.contains('fa-check-circle'))
    if (e.target.classList.contains('fa-check-circle')) {
        tareas[e.target.dataset.id].estado = true
        pintarTareas()
        console.log(tareas)    
    }
   // e.stopPropagation()


    if (e.target.classList.contains('fa-minus-circle')) {
        // console.log(e.target.dataset.id)
        delete tareas[e.target.dataset.id]
        pintarTareas()
    }
    e.stopPropagation()
}
// if (e.target.classList.contains('fa-undo-alt')) {
//     tareas[e.target.dataset.id].estado = false
//     pintarTareas()
// }





