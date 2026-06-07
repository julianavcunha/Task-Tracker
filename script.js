import { taskList, addTask, deleteTask, toggleTaskComplete, renderTasks } from './addTaskdeleteTask.js';

const taskListElement = document.getElementById('task-list');
const inputField = document.getElementById('task-name');

function refresh() {
  renderTasks(taskListElement);
}

inputField.addEventListener('keypress', (event) => {
  if (event.key !== 'Enter') return;
  const value = inputField.value.trim();
  if (!value) return;

  addTask(value);
  inputField.value = '';
  refresh();
});

taskListElement.addEventListener('click', (event) => {
  const target = event.target;
  const id = target.dataset.id;
  if (!id) return;

  if (target.classList.contains('task-delete')) {
    deleteTask(id);
    refresh();
    return;
  }

  if (target.classList.contains('task-checkbox')) {
    toggleTaskComplete(id);
    refresh();
    return;
  }
});

refresh();
