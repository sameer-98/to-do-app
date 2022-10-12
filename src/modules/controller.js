import list from './todolist';
import view from './displayController';

function loadHomePage() {
  // TODO: Get todo list and display
  const projectArr = list().getProject('inbox');
  const present = view().displayProject(projectArr);
  const main = document.getElementById('main');
  main.appendChild(present);
  // TODO: Initialize the buttons
  // Initialize the add task buttons
  const addTaskBtn = document.querySelector('.addTask');
  addTaskBtn.addEventListener('click', view().displayCard());
}

export default loadHomePage;
