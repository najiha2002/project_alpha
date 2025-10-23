let todos = [];

// DOM elements (linked to HTML)
const todoInput = document.getElementById('todo-input'); 
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to render the todo list
const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;

        // Delete button
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => deleteTodo(index));

        li.appendChild(delBtn); 

        todoList.appendChild(li);
    });
};

// Function to add todos
const addTodo = () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todos.push(todoText.trim());
        todoInput.value = ''; // reinitialize input field
        renderTodos();
    }
}

// FUnction to delete todos
const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
};

// Event listener
addBtn.addEventListener('click', addTodo);