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
  const addNewTask = (title, description, priority, dueDate) => {
    tasks.push(todos(title, description, priority, dueDate));
  };

  // delete tasks
  const deleteTask = (taskName) => {
    tasks.filter((task) => task.getName() !== taskName);
  };

  return {
    getTasks, getName, containsTask, addNewTask, deleteTask,
  };
};
export default project;
