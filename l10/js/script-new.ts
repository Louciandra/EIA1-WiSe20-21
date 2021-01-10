var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var todosText: Todo[] = [];

interface Todo {
    text: string;
    checked: boolean;
}

window.addEventListener("load", function(): void {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < todosText.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todosText[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todosText[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = todosText.length + " in total";
}


function addTodo(): void {
    
    if (inputDOMElement.value != "") {
        var neu: Todo = {
            text: inputDOMElement.value,
            checked: false
        };
        todosText.unshift(neu);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {
    todosText[index].checked = !todosText[index].checked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    todosText.splice(index, 1);    
    drawListToDOM();
}