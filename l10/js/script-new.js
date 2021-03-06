var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var todosText = [];
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosText[index].checked + "'><i class='fas fa-check'></i></span>"
            + todosText[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < todosText.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = todosText.length + " in total";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        var neu = {
            text: inputDOMElement.value,
            checked: false
        };
        todosText.unshift(neu);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todosText[index].checked = !todosText[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    todosText.splice(index, 1);
    drawListToDOM();
}
