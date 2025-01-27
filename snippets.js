document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const usuario = {
                correo: username,
                contra: password
            };
            console.log(usuario);
            localStorage.setItem('Usuario', JSON.stringify(usuario));

            window.location.href = 'Contactos.html';
        });
    } else {
        console.error("Formulario no encontrado");
    }

    const user = JSON.parse(localStorage.getItem('Usuario'));
    if (user) {
        document.getElementById('emailLabel').innerHTML = `${user.correo}`;
        document.getElementById('passwordLabel').innerHTML = `${user.contra}`;
    }
});

const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const taskPrioritySelect = document.getElementById('taskPriority');
const tasksContainer = document.getElementById('tasksContainer');

let tasks = [];

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            renderTasks();
        }
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = {
        id: Date.now(),
        name: taskNameInput.value,
        priority: taskPrioritySelect.value
        };

        tasks.push(task);
        saveTasks();
        renderTasks();

        taskNameInput.value = '';
        taskPrioritySelect.value = '3';
    });

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    function renderTasks() {
        tasksContainer.innerHTML = '';

        const sortedTasks = tasks.sort((a, b) => a.priority - b.priority);

        sortedTasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');

            taskElement.innerHTML = `
                <p>${task.name}</p>
                <span class="priority">Prioridad: ${getPriorityLabel(task.priority)}</span>
                <div class="task-actions">
                    <button class="edit" onclick="editTask(${task.id})">Editar</button>
                    <button class="delete" onclick="deleteTask(${task.id})">Eliminar</button>
                </div>
            `;

            tasksContainer.appendChild(taskElement);
        });
    }

    function getPriorityLabel(priority) {
        switch (priority) {
            case '1': return 'Alta';
            case '2': return 'Media';
            case '3': return 'Baja';
            default: return '';
        }
    }

    function editTask(taskId) {
        const task = tasks.find(t => t.id === taskId);

        if (task) {
            taskNameInput.value = task.name;
            taskPrioritySelect.value = task.priority;

            deleteTask(taskId);
        }
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        renderTasks();
    }

    loadTasks();