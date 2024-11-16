let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        tasks.push(taskValue);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}
