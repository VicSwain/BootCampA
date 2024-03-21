var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function? Create list element and display on page based on user input
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
//  clear content with the the todo list
  todoList.innerHTML = "";
  // keeping  a count of the to do 
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop. Created the actual list box with the ability to complete the task
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function? Turn the string into an array 
function init() {
  // TODO: What is the purpose of the following line of code? Turns the string into an array and stores it 
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code. Stores todos in local storage as a string
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement. if there is no input get out of the function
  if (todoText === "") {
    return;
  }
//  TODO: Describe the purpose of the following lines of code.
// push todoText to the end of the todos array and then clears it
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // store todos to the local storage
    storeTodos();
    
    renderTodos();
  }
});

init();
