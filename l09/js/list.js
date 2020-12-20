var anzahl = 0;
var userTask;
window.onload = function () {
    userTask = document.querySelector(".taskinput");
    userTask.addEventListener("keypress", distribute);
};
function distribute(key) {
    if (key.code == "Enter") {
        var userInput = userTask.value;
        userTask.value = "";
        var container_1 = document.createElement("div");
        container_1.className = "listenDiv";
        var doneB_1 = document.createElement("i");
        doneB_1.className = "far fa-square";
        var text = document.createElement("p");
        text.className = "task-text";
        text.innerHTML = userInput;
        var deleteB = document.createElement("i");
        deleteB.className = "fas fa-trash";
        document.body.appendChild(container_1);
        container_1.appendChild(doneB_1);
        container_1.appendChild(text);
        container_1.appendChild(deleteB);
        anzahl++;
        counter();
        doneB_1.addEventListener("click", function () {
            doneB_1.classList.toggle("fa-check-square");
            doneB_1.classList.toggle("fa-square");
        });
        deleteB.addEventListener("click", function () {
            document.body.removeChild(container_1);
            anzahl--;
            counter();
        });
    }
}
function counter() {
    document.querySelector(".counter").innerHTML = "" + anzahl;
}
