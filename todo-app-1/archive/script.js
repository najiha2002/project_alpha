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

// Function to get todos by input field
const getTodosByInput = () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        return [todoText];
    }
    return [];
};

// Function to add todos
const addTodo = () => {
    const todosToAdd = getTodosByInput();
    if (todosToAdd.length > 0) {
        todos.push(...todosToAdd);
        todoInput.value = ''; // reinitialize input field
        renderTodos();
    }
}

// Function to delete todos
const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
};

// Fetch Todos from API
const fetchTodos = async () => {
    try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        // Extract just the todo text from each todo object
        todos = data.todos.map(todoItem => todoItem.todo);
        console.log("Todos fetched successfully:", todos);
        renderTodos();
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
};

// Main function
const main = async () => {
    addBtn.addEventListener('click', addTodo);
    await fetchTodos();
};

// Call main function when page loads
main();