"use strict";
// Initialize todos array with proper typing
let todosArray = [];
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
        listItem.textContent = todo;
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => removeTodo(index));
        listItem.appendChild(deleteButton);
        todoListElement.appendChild(listItem);
    });
};
// Function to get todos from input field
const getTodosFromInput = () => {
    if (!todoInputElement)
        return [];
    const todoText = todoInputElement.value.trim();
    if (todoText !== '') {
        return [todoText];
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
// Function to delete todos
const removeTodo = (index) => {
    todosArray.splice(index, 1);
    renderTodoList();
};
// Fetch todos from API
const fetchTodosFromApi = async () => {
    try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        // Extract todo text from API response
        todosArray = data.todos.map((todoItem) => todoItem.todo);
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