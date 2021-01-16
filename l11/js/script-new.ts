var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var todosText: Todo[] = [];
declare var Artyom: any;

interface Todo {
    text: string;
    checked: boolean;
}

window.addEventListener("load", function(): void {
    var artyom: any = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            addTodoFromArtyom(wildcard);
        }
    });
    function startContinuousArtyom(): void {
        artyom.fatality();
        setTimeout(function (): void {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function (): void {
                console.log("Ready!");
            });
        },         250);
    }
    startContinuousArtyom();
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
    var inTotal: number = todosText.length;
    var checked: number = 0;
    var unchecked: number;
    for (let i: number = 0; i < inTotal; i++) {
        console.log(todosText[i].checked);
        if (todosText[i].checked) {
            checked++;
        }
    }
    unchecked = inTotal - checked;
    counterDOMElement.innerHTML = inTotal + " in total, " + unchecked + " open, " + checked + " done";
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

function addTodoFromArtyom(name: string): void {
    var neu: Todo = {
            text: name,
            checked: false
        };
    todosText.unshift(neu);
    inputDOMElement.value = "";
    drawListToDOM();
}

function toggleCheckState(index: number): void {
    todosText[index].checked = !todosText[index].checked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    todosText.splice(index, 1);    
    drawListToDOM();
}