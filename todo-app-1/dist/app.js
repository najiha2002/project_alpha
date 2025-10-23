"use strict";
// Initialize todos array with proper typing
let todosArray = [];
let nextId = 1;
// DOM elements with proper type assertions and null checks
const todoInputElement = document.getElementById('todo-input');
const addButtonElement = document.getElementById('add-btn');
const todoListElement = document.getElementById('todo-list');
// Function to render the todo list
const renderTodoList = () => {
    if (!todoListElement)
        return;
    todoListElement.innerHTML = '';
    todosArray.forEach((todo, index) => {
        const listItem = document.createElement('li');
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => handleTodoCompletion(index, checkbox.checked));
        // Create text span
        const textSpan = document.createElement('span');
        textSpan.textContent = todo.text;
        // Apply completed styling if needed
        if (todo.completed) {
            textSpan.style.color = 'gray';
            textSpan.style.fontStyle = 'italic';
            textSpan.style.textDecoration = 'line-through';
        }
        listItem.appendChild(checkbox);
        listItem.appendChild(textSpan);
        todoListElement.appendChild(listItem);
    });
};
// Function to handle todo completion with delay
const handleTodoCompletion = (index, isChecked) => {
    if (isChecked) {
        // Wait 2 seconds before marking as completed
        setTimeout(() => {
            todosArray[index].completed = true;
            renderTodoList();
        }, 2000);
    }
    else {
        // Immediately mark as not completed
        todosArray[index].completed = false;
        renderTodoList();
    }
};
// Function to get todos from input field
const getTodosFromInput = () => {
    if (!todoInputElement)
        return [];
    const todoText = todoInputElement.value.trim();
    if (todoText !== '') {
        return [{
                text: todoText,
                completed: false,
                id: nextId++
            }];
    }
    return [];
};
// Function to add new todos
const addNewTodo = () => {
    if (!todoInputElement)
        return;
    const todosToAdd = getTodosFromInput();
    if (todosToAdd.length > 0) {
        todosArray.push(...todosToAdd);
        todoInputElement.value = '';
        renderTodoList();
    }
};
// Function to delete todos (keeping for potential future use)
const removeTodo = (index) => {
    todosArray.splice(index, 1);
    renderTodoList();
};
// Fetch todos from API
const fetchTodosFromApi = async () => {
    try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        // Convert API todos to our local format
        todosArray = data.todos.map((todoItem) => ({
            text: todoItem.todo,
            completed: todoItem.completed,
            id: todoItem.id
        }));
        // Update nextId to avoid conflicts
        nextId = Math.max(...todosArray.map(todo => todo.id)) + 1;
        console.log("Todos fetched successfully:", todosArray);
        renderTodoList();
    }
    catch (error) {
        console.error("Error fetching todos:", error);
    }
};
// Main initialization function
const initializeTodoApp = async () => {
    if (!addButtonElement) {
        console.error('Add button not found in DOM');
        return;
    }
    // Add event listener for add button
    addButtonElement.addEventListener('click', addNewTodo);
    // Fetch initial todos from API
    await fetchTodosFromApi();
};
// Initialize the app when DOM is loaded
initializeTodoApp();
//# sourceMappingURL=app.js.map