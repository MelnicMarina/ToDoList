const label = document.querySelector('.task /*.box .checkmark img*/ ')
const add = document.querySelector('button')
const dell1 = document.querySelector('img')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const text1 = document.querySelector('.checkmark')


add.addEventListener('click', () => {
    const boxTask = label.cloneNode(true)
    boxTask.querySelector('.checkmark').textContent = input.value
    container.appendChild(boxTask)
    input.value = ''

    const dell = boxTask.querySelector('img')
    dell.addEventListener('click', () =>{
        boxTask.remove()
    })

    const text = boxTask.querySelector(".checkmark")
    text.addEventListener('click', () => {
        text.classList.toggle('checkmark1')
    })
})

dell1.addEventListener('click', () =>{
    label.remove()
})

text1.addEventListener('click', () => {
    text1.classList.toggle('checkmark1')
})





