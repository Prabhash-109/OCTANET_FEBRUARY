function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", function() {
            this.classList.toggle("fade-out");
        });
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteList() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
