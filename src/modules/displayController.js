const view = () => {
  const displayProject = (project) => {
    // Change the name of the current project
    const projectHeading = document.getElementById('projectHeading');
    // projectHeading.textContent = project.getName();
  };

  const displayCard = (projectList) => {
    const addTaskBtn = document.querySelector('.addTask');
    const formBox = document.createElement('form');
    const todoTitle = document.createElement('input');
    const todoDescription = document.createElement('input');
    const dueDate = document.createElement('input');
    const priority = document.createElement('select');
    const high = document.createElement('option');
    const medium = document.createElement('option');
    const low = document.createElement('option');
    const submitBtn = document.createElement('button');
    const discardBtn = document.createElement('button');

    // Setting attributes
    formBox.classList.add('formBox');
    todoTitle.setAttribute('type', 'text');
    todoTitle.setAttribute('name', 'todoTitle');
    todoDescription.setAttribute('type', 'text');
    todoDescription.setAttribute('name', 'todoDescription');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('name', 'dueDate');
    submitBtn.setAttribute('type', 'submit');
    priority.setAttribute('name', 'priority');
    high.setAttribute('value', 'high');
    low.setAttribute('value', 'low');
    medium.setAttribute('value', 'medium');
    submitBtn.classList.add('submit');
    discardBtn.classList.add('discard');
  };

  return { displayProject, displayCard };
};

export default view;
