let data = [];

function renderTodo() {

    document.querySelector('.todo').innerHTML = '';

    data.forEach(task => {

        let li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">x</button>
            `;
        li.querySelector('input').addEventListener("change", e => {

            if (e.target.checked) {
                li.classList.add('complete');
            } else {
                li.classList.remove('complete');
            }

        });

        li.querySelector('button').addEventListener('click', e => {

            console.warning("Você vai deletar este item ?");
        })

        document.querySelector('.todo').append(li);

    });
}

document.querySelector('#new-task').addEventListener('keyup', e => {

    if (e.key == 'Enter') {
        
        data.push({
            id: data.length + 1,
            title: e.target.value
        });

        e.target.value = "";

        renderTodo();
    }

});

renderTodo();