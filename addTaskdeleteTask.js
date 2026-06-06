const taskListElement = document.getElementById('task-list');
const inputButton = document.getElementById('task-name');

let taskList = [
  {id: 'task-1', task: 'New task is created and added to the list', status: 'incomplete'},
  {id: 'task-2', task: 'Clicking the checkbox toggles the completeness', status: 'incomplete'},
  {id: 'task-3', task: 'Delete button will delete the task from the list', status: 'incomplete'},
  {id: 'task-4', task: 'Complete tasks show at the end with strikethrough ', status: 'incomplete'},
  {id: 'task-5', task: 'Marking in complete will put it back in pending list', status: 'incomplete'}
];

function addTask(task) {
  taskList.push({
    id: `task-${taskList.length + 1}`,
    task: task,
    status: 'incomplete'
  });

  return taskList;
}

const deleteTask = (id) => {
  taskList = taskList.filter(task => task.id !== id);
  return taskList;
};

function completeTask() {

}

function toggleCheckBox(id) {
  id.addEventListener('click', () => {

  })
};

export default {addTask, deleteTask, toggleCheckBox};