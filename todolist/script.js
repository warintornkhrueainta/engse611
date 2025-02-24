const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  //console.log("Hello, guys.");
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);

    todoInput.value = "";

    renderTodos();
  }
}

function deleteTodo(id) {
  console.log(id);
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";

    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault;
  addTodo();
});