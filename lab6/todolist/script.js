
const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  console.log("Adding todo:", todoText);
  if (todoText.length > 0 && todoText.length <= 50) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);

    todoInput.value = "";

    renderTodos();
  } else {
    alert("Task text must be between 1 and 50 characters.");
  }
}

function deleteTodo(id) {
  console.log("Deleting todo with id:", id);
  if (confirm("Are you sure you want to delete this task?")) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function toggleCompleted(id) {
  console.log("Toggling completed for todo with id:", id);
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodos();
}

function renderTodos() {
  console.log("Rendering todos:", todos);
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const myCheck = document.createElement("input");

    myCheck.setAttribute("type", "checkbox");
    myCheck.checked = todo.completed;
    myCheck.addEventListener("click", () => toggleCompleted(todo.id));

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";

    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));

    if (todo.completed) {
      todoItem.classList.add("completed");
      todoText.style.textDecoration = "line-through";
    } else {
      todoText.style.textDecoration = "none";
    }

    todoItem.appendChild(myCheck);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
  addTodo();
});

renderTodos();
