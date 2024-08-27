// Selecting Todo Application
document.addEventListener('DOMContentLoaded', getTodo);
const TodoInput = document.querySelector(".to-in");
const TodoButton = document.querySelector(".to-btn");
const TodoList = document.querySelector(".todo-list");

// Adding Event Listener
TodoButton.addEventListener("click", addto);

// Adding other Event Listener
TodoList.addEventListener("click", Del);

// Add functions
function addto(e) {
  // Create Todo list div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create Todo list
  const toLi = document.createElement("li");
  toLi.classList.add("todoItems");
  toLi.innerText = TodoInput.value;

  // Appending
  todoDiv.appendChild(toLi);

  // Storage
  todostr(TodoInput.value);

  // Trash button
  const trashbtn = document.createElement("button");
  trashbtn.classList.add("trash");
  trashbtn.innerText = "- Del";
  todoDiv.appendChild(trashbtn);

  // Append todoDiv to TodoList
  TodoList.appendChild(todoDiv);

  // Clear Input
  TodoInput.value = "";
}

// Delete Function
function Del(e) {
  const item = e.target;
  if (item.classList[0] === "trash") {
    const todo = item.parentElement;
    removeLocal(todo);
    todo.remove();
  }
}

// Add Storage
function todostr(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// To show UI
function getTodo() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(function(todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const toLi = document.createElement("li");
    toLi.classList.add("todoItems");
    toLi.innerText = todo;
    todoDiv.appendChild(toLi);

    const trashbtn = document.createElement("button");
    trashbtn.classList.add("trash");
    trashbtn.innerText = "- Del";
    todoDiv.appendChild(trashbtn);

    TodoList.appendChild(todoDiv);
  });
}

// Remove from localStorage
function removeLocal(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
