export const taskList = [
  { id: 'task-1', text: 'New task is created and added to the list', completed: false },
  { id: 'task-2', text: 'Clicking the checkbox toggles the completeness', completed: false },
  { id: 'task-3', text: 'Delete button will delete the task from the list', completed: false },
  { id: 'task-4', text: 'Complete tasks show at the end with strikethrough', completed: false },
  { id: 'task-5', text: 'Marking in complete will put it back in pending list', completed: false }
];

export function addTask(text) {
  if (!text || !text.trim()) return;

  const nextId = `task-${taskList.length + 1}`;
  taskList.push({ id: nextId, text: text.trim(), completed: false });
}

export function deleteTask(id) {
  const index = taskList.findIndex((task) => task.id === id);
  if (index !== -1) {
    taskList.splice(index, 1);
  }
}

export function toggleTaskComplete(id) {
  const task = taskList.find((item) => item.id === id);
  if (task) {
    task.completed = !task.completed;
  }
}

export function renderTasks(container) {
  container.innerHTML = '';

  taskList.forEach((task) => {
    const item = document.createElement('div');
    item.className = 'task-item';
    if (task.completed) item.classList.add('completed');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.id = task.id;
    checkbox.checked = task.completed;
    checkbox.className = 'task-checkbox';

    const label = document.createElement('label');
    label.textContent = task.text;
    label.htmlFor = task.id;
    label.className = 'task-label';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.id = task.id;
    deleteButton.className = 'task-delete';

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(deleteButton);
    container.appendChild(item);
  });
}
