const label = document.querySelector('.task');
const add = document.querySelector('button');
const dell1 = document.querySelector('.task img');
const container = document.querySelector('.container');
const input = document.querySelector('input');
const text1 = document.querySelector('.checkmark');

    const toggleCercClass = (cerc, line) => {
    if (cerc.classList.contains('cerc') && line.classList.contains('checkmark')) {
        cerc.classList.remove('cerc');
        cerc.classList.add('cerc1');
        line.classList.add('checkmark1');
    } else {
        cerc.classList.remove('cerc1');
        cerc.classList.add('cerc');
        line.classList.remove('checkmark1');
    }
};

add.addEventListener('click', () => {
    if (input.value.trim() === '') return;

    const boxTask = label.cloneNode(true);
    const text = boxTask.querySelector('.checkmark');
    text.textContent = input.value;
    container.appendChild(boxTask);
    input.value = '';

    const dell = boxTask.querySelector('img');
    dell.addEventListener('click', () => {
        boxTask.remove();
    });

    text.addEventListener('click', () => {
        text.classList.toggle('checkmark1');
    });

    const checkBox = boxTask.querySelector('input[type="checkbox"]');
    if (checkBox) {
        checkBox.addEventListener('click', () => {
            text.classList.toggle('checkmark1');
        });
    }

    const cerc = boxTask.querySelector('.cerc');
    if (cerc) {
        cerc.addEventListener('click', () => {
            toggleCercClass(cerc, text);
        });
    }
});

dell1.addEventListener('click', () => {
    label.remove();
});

text1.addEventListener('click', () => {
    text1.classList.toggle('checkmark1');
});

const initialCerc = label.querySelector('.cerc');
if (initialCerc) {
    initialCerc.addEventListener('click', () => {
        const initialText = label.querySelector('.checkmark');
        toggleCercClass(initialCerc, initialText);
    });
}
