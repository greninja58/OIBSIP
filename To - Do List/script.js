// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

// Store tasks in an array
let tasks = [];

// Add a new task
function addTask() {
  const taskTitle = taskInput.value.trim();
  const taskDescription = document.getElementById('taskDescription').value.trim();

  if (taskTitle !== '' && taskDescription !== '') {
    const task = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      completed: false,
      timestamp: new Date().toLocaleString(),
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = '';
    document.getElementById('taskDescription').value = '';
  }
}
// Render tasks
function renderTasks() {
  // Clear the task lists
  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');

    const titleElement = document.createElement('h3');
    titleElement.innerText = task.title;
    listItem.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = task.description;
    listItem.appendChild(descriptionElement);

    const actionsContainer = document.createElement('div');
    actionsContainer.classList.add('actions');

    if (task.completed) {
      listItem.classList.add('completed');
      const incompleteButton = document.createElement('button');
      incompleteButton.innerText = 'Mark Incomplete';
      incompleteButton.classList.add('incomplete');
      incompleteButton.addEventListener('click', () => markTaskAsIncompleted(task.id));
      actionsContainer.appendChild(incompleteButton);
    } else {
      const completeButton = document.createElement('button');
      completeButton.innerText = 'Mark Complete';
      completeButton.classList.add('complete');
      completeButton.addEventListener('click', () => markTaskAsCompleted(task.id));
      actionsContainer.appendChild(completeButton);
    }

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => editTask(task.id));

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => deleteTask(task.id));

    actionsContainer.appendChild(editButton);
    actionsContainer.appendChild(deleteButton);

    listItem.appendChild(actionsContainer);

    // Append the task to the appropriate list
    if (task.completed) {
      completedList.appendChild(listItem);
    } else {
      pendingList.appendChild(listItem);
    }
  });
}

// Edit a task
function editTask(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  const newTaskTitle = prompt('Enter new task title:');
  const newTaskDescription = prompt('Enter new task description:');

  if (newTaskTitle !== null && newTaskTitle.trim() !== '' && newTaskDescription !== null && newTaskDescription.trim() !== '') {
    tasks[taskIndex].title = newTaskTitle.trim();
    tasks[taskIndex].description = newTaskDescription.trim();
    renderTasks();
  }
}

// Delete a task
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

// Mark a task as completed
function markTaskAsCompleted(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIndex].completed = true;
  renderTasks();
}
// Mark a task as incomplete
function markTaskAsIncompleted(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIndex].completed = false;
  renderTasks();
}
// Event listener for the Enter key press on task description input
document.getElementById('taskDescription').addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});

// Event listener for the Enter key press on task input
taskInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});

// Initial rendering of tasks
renderTasks();
