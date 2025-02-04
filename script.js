document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let subject = document.getElementById('subject').value;
    let topic = document.getElementById('topic').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;

    let taskList = document.getElementById('taskList');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task', `priority-${priority.toLowerCase()}`);
    taskDiv.innerHTML = `<strong>${subject}</strong> - ${topic} (Due: ${dueDate}) 
                         <button onclick="deleteTask(this)">Delete</button>`;
    
    taskList.appendChild(taskDiv);
    updateProgress();

    document.getElementById('taskForm').reset();
});

function deleteTask(button) {
    button.parentElement.remove();
    updateProgress();
}

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Search Task
document.getElementById('searchTask').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    document.querySelectorAll('.task').forEach(task => {
        task.style.display = task.innerText.toLowerCase().includes(searchValue) ? 'flex' : 'none';
    });
});

// Update Progress Bar
function updateProgress() {
    let tasks = document.querySelectorAll('.task').length;
    let progress = document.getElementById('progress');
    progress.style.width = tasks > 0 ? `${tasks * 10}%` : '0%';
}
