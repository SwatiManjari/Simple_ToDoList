let existingBoxes = document.querySelectorAll(".taskBox");

existingBoxes.forEach(function(task) {
  task.querySelector("input").addEventListener("change", function() {
    if (this.checked) {
      task.querySelector("span").style.textDecoration = "line-through";
    } else {
      task.querySelector("span").style.textDecoration = "none";
    }
  });
});

let btn = document.getElementById("addBtn");

btn.addEventListener("click", function() {
  let txt = document.getElementById("taskInput").value;

  let taskList = document.getElementById("taskList");

  let newTask = document.createElement("div");
  newTask.classList.add("taskBox");
  newTask.innerHTML = `<input type="checkbox"> <span>${txt}</span>`;

  taskList.appendChild(newTask);

  newTask.querySelector("input").addEventListener("change", function() {
    if (this.checked) {
      newTask.querySelector("span").style.textDecoration = "line-through";
    } else {
      newTask.querySelector("span").style.textDecoration = "none";
    }
  });

  document.getElementById("taskInput").value = "";
});