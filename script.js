const label = document.querySelector('.task /*.box .checkmark img*/ ')
const add = document.querySelector('button')
const dell = document.querySelector('img')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const text = document.querySelector('.checkmark')

/*dell.addEventListener('click', () => {
    label.classList.remove('task')
})*/

add.addEventListener('click', () => {
    const contTask = document.createElement('div')
    contTask.classList.add('boxTask')
    container.appendChild(contTask)
    contTask.appendChild(label)
    const cloneLabel = contTask.cloneNode(true)
    contTask.appendChild(cloneLabel)
    text.textContent = input.value


})

const contTask = document.createElement('div')
contTask.classList.add('boxTask')
container.appendChild(contTask)
dell.addEventListener('click', () => {

    contTask.querySelectorAll('.boxTask')
    contTask.appendChild(label)
    contTask.removeChild(label)
})
