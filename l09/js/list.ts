var anzahl: number = 0;
var userTask: HTMLInputElement;

window.onload = function(): void {
    userTask = document.querySelector(".taskinput");
    userTask.addEventListener("keypress", distribute);
};


function distribute(key: KeyboardEvent): void {
    if (key.code == "Enter") {
        var userInput: string = userTask.value;
        userTask.value = "";
        let container: HTMLDivElement = document.createElement("div");
        container.className = "listenDiv";
        let doneB: HTMLElement = document.createElement("i");
        doneB.className = "far fa-square";
        let text: HTMLElement = document.createElement("p");
        text.className = "task-text";
        text.innerHTML = userInput;
        let deleteB: HTMLElement = document.createElement("i");
        deleteB.className = "fas fa-trash";
    
        document.body.appendChild(container);
        container.appendChild(doneB);
        container.appendChild(text);
        container.appendChild(deleteB);
    
        anzahl++;
        counter();

        doneB.addEventListener("click", function(): void {
            doneB.classList.toggle("fa-check-square");
            doneB.classList.toggle("fa-square");
        });
    
        deleteB.addEventListener("click", function(): void {
            document.body.removeChild(container);
            anzahl--;
            counter();
        });
    }
    
}

function counter(): void {
    document.querySelector(".counter").innerHTML = "" + anzahl;
}