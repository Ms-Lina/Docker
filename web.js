function addTask() {
    var newTaskInput = document.getElementById("new-task");
    var taskList = document.getElementById("task-list");
    var taskText = newTaskInput.value;
    
    if (taskText.trim() !== "") {
        var taskItem = document.createElement("div");
        taskItem.className = "task";
        taskItem.innerHTML = '<input type="checkbox" onchange="toggleTaskCompletion(this)"> ' + taskText;
        taskList.appendChild(taskItem);
        newTaskInput.value = "";
    }
}

function toggleTaskCompletion(checkbox) {
    var taskItem = checkbox.parentElement;
    
    if (checkbox.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
}
