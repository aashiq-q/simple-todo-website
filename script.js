document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.textContent = todoText;
            todoItem.addEventListener('click', toggleComplete);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    }

    function toggleComplete() {
        this.classList.toggle('completed');
    }
});
