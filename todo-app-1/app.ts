// Define interfaces for type safety
interface TodoItem {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

interface ApiResponse {
    todos: TodoItem[];
    total: number;
    skip: number;
    limit: number;
}

// Initialize todos array with proper typing
let todosArray: string[] = [];

// DOM elements with proper type assertions and null checks
const todoInputElement = document.getElementById('todo-input') as HTMLInputElement;
const addButtonElement = document.getElementById('add-btn') as HTMLButtonElement;
const todoListElement = document.getElementById('todo-list') as HTMLUListElement;

// Function to render the todo list
const renderTodoList = (): void => {
    if (!todoListElement) return;
    
    todoListElement.innerHTML = '';
    todosArray.forEach((todo: string, index: number) => {
        const listItem: HTMLLIElement = document.createElement('li');
        listItem.textContent = todo;

        // Create delete button
        const deleteButton: HTMLButtonElement = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => removeTodo(index));

        listItem.appendChild(deleteButton);
        todoListElement.appendChild(listItem);
    });
};

// Function to get todos from input field
const getTodosFromInput = (): string[] => {
    if (!todoInputElement) return [];
    
    const todoText: string = todoInputElement.value.trim();
    if (todoText !== '') {
        return [todoText];
    }
    return [];
};

// Function to add new todos
const addNewTodo = (): void => {
    if (!todoInputElement) return;
    
    const todosToAdd: string[] = getTodosFromInput();
    if (todosToAdd.length > 0) {
        todosArray.push(...todosToAdd);
        todoInputElement.value = '';
        renderTodoList();
    }
};

// Function to delete todos
const removeTodo = (index: number): void => {
    todosArray.splice(index, 1);
    renderTodoList();
};

// Fetch todos from API
const fetchTodosFromApi = async (): Promise<void> => {
    try {
        const response: Response = await fetch('https://dummyjson.com/todos');
        const data: ApiResponse = await response.json();
        
        // Extract todo text from API response
        todosArray = data.todos.map((todoItem: TodoItem) => todoItem.todo);
        console.log("Todos fetched successfully:", todosArray);
        renderTodoList();
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
};

// Main initialization function
const initializeTodoApp = async (): Promise<void> => {
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