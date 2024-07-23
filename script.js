const label = document.querySelector('.task /*.box .checkmark img*/ ')
const add = document.querySelector('button')
const dell1 = document.querySelector('img')
const container = document.querySelector('.container')
const input = document.querySelector('input')



add.addEventListener('click', () => {
    const boxTask = label.cloneNode(true)
    boxTask.querySelector('.checkmark').textContent = input.value
    container.appendChild(boxTask)
    input.value = ''

    const dell = boxTask.querySelector('img')
    dell.addEventListener('click', () =>{
        boxTask.remove()
    })
})

dell1.addEventListener('click', () =>{
    label.remove()
})



