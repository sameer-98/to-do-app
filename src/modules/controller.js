import * as model from './todolist';
import * as view from './displayController';

const controller = () => {
  (function loader() {
    // TODO: Get todo list and display
    model.updateTodayTasks();
    model.updateWeekTasks();
    model.updateInbox();
    const inbox = model.getProject('inbox').getTasks();
    view.displayProjects('inbox', inbox);
  }());

  // TODO: Initialize the buttons
  // Initialize the add task buttons
  const addTaskBtn = document.querySelector('.addTask');
  addTaskBtn.addEventListener('click', view.displayCard);

  // Initialize add project button
  const addProjectBtn = document.querySelector('.addProjects');
  addProjectBtn.addEventListener('click', view.newProject);
};

export default controller;
