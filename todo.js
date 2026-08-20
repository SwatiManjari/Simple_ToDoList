let btn = document.getElementById("addBtn");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

btn.addEventListener("click", addTask);

function addTask() {
    let txt = input.value.trim();

    if (txt === "") {
        return;
    }

    let newTask = document.createElement("div");
    newTask.classList.add("taskBox");

    newTask.innerHTML = `
        <input type="checkbox">
        <span>${txt}</span>
    `;

    taskList.appendChild(newTask);

    input.value = "";
    input.focus();
}
