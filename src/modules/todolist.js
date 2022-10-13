import { compareAsc } from 'date-fns';
import project from './project';

const projects = [];
projects.push(project('inbox'));
projects.push(project('today'));
projects.push(project('week'));

const getProjects = () => projects;

// Return a project
const getProject = (projectName) => {
  projects.find((proj) => proj.getName() === projectName);
};

// Return list of tasks of a project TODO: update the projects
const getTaskList = (projectName) => getProject(projectName).getTasks();

// Getting data from the form and storing in the respective project
// and returns the updated project task list

const createTask = () => {
  const form = document.querySelector('.formBox');
  const title = form.elements.title.value;
  const description = form.elements.description.value;
  const priority = form.elements.priority.value;
  const dueDate = form.elements.dueDate.value;
  const projectName = form.elements.projectName.value;

  if (!getProject(projectName).containsTask(title)) {
    getProject(projectName).addNewTask({
      title, description, priority, dueDate, projectName,
    });
  }
  return getTaskList(projectName);
};

// Create a new project and return updated list of project
const createProject = () => {
  const newProject = document.querySelector('newProjectTitle');

  if (getProject(newProject) === undefined) {
    projects.push(project(newProject));
  }
  return projects.map((proj) => proj.getName());
};

// Update today tasks
const updateTodayTasks = () => {
  projects.forEach((proj) => {
    if (!proj.getName() === 'today') {
      getProject('today').addNewTask(...proj.getTodayTasks);
    }
  });
};

// Update weeks tasks
const updateWeekTasks = () => {
  projects.forEach((proj) => {
    if (!(proj.getName() === 'today' && proj.getName() === 'week')) {
      getProject('week').addNewTask(...proj.getWeekTask);
    }
  });
  getProject('week').sort((taskA, taskB) => compareAsc(
    new Date(taskA.getFormattedDate()),
    new Date(taskB.getFormattedDate()),
  ));
};

export {
  getProjects, getProject, getTaskList, createTask, createProject,
  updateTodayTasks, updateWeekTasks,
};
