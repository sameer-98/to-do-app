import { isThisWeek, isToday } from 'date-fns';
import todos from './todo';

const project = (name) => {
  const tasks = [];

  // Getting all tasks of a project
  const getTasks = () => tasks;

  // Get name of the project
  const getName = () => name;

  // check if present in projects
  const containsTask = (taskName) => {
    tasks.some((task) => task.getName() === taskName);
  };

  // add new tasks
  const addNewTask = (taskObj) => {
    if (!containsTask(taskObj.title)) { tasks.push(todos(taskObj)); }
  };

  // delete tasks
  const deleteTask = (taskName) => {
    tasks.filter((task) => task.getName() !== taskName);
  };

  // get today task from this project
  const getTodayTasks = () => tasks.filter((task) => isToday(new Date(task.getFormattedDate())));

  // get weeks task from this project
  const getWeekTasks = () => tasks.filter((task) => isThisWeek(new Date(task.getFormattedDate())));

  return {
    getTasks, getName, containsTask, addNewTask, deleteTask, getTodayTasks, getWeekTasks,
  };
};
export default project;
