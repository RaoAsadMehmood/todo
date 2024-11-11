var idCount = 1;
var todos = [];

function addTodo() {
    var inpVal = document.getElementById("inp");

    if (inpVal.value.trim() === "") {
        alert("Please add a to-do task!");
        return;
    }

    todos.push({
        id: idCount,
        title: inpVal.value.trim()
    });

    render();

    inpVal.value = "";
    idCount++;
}

function render() {
    var todosContainer = document.getElementById("todos");
    todosContainer.innerHTML = ""; 

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        var element = document.createElement("div");
        element.setAttribute("id", `todo-${todo.id}`);
        element.setAttribute("class", "todo");

        element.innerHTML = `
            <p class="todo-text">${todo.title}</p>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
            <button onclick="updateTodo(${todo.id})">Update</button>
        `;

        todosContainer.appendChild(element);
    }
}

function deleteTodo(id) {
    todos = todos.filter(function(todo) {
        return todo.id !== id;
    });

    render();
}

function updateTodo(id) {
    var todoItem = todos.find(function(todo) {
        return todo.id === id;
    });
    var inpVal = document.getElementById("inp");

    var newText = inpVal.value.trim();
    if (newText === "") {
        alert("Please enter a valid to-do item.");
        return;
    }

    todoItem.title = newText;
    inpVal.value = "";

    render();
}
