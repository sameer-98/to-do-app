const createPopup = (taskObj) => {
  const item = document.createElement('div');
  item.classList.add('popup');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');

  const para = document.createElement('p');
  para.classList.add('taskName');
  para.textContent = taskObj.title;

  const showDate = document.createElement('div');
  showDate.textContent = taskObj.getFormattedDate();
  showDate.classList.add('taskDate');

  item.appendChild(checkbox);
  item.appendChild(para);
  item.appendChild(showDate);

  return item;
};

const displayCard = () => {

};

const displayProjects = (name, taskArr) => {
  const heading = document.querySelector('#projectHeading');
  const list = document.querySelector('#taskDisplayContainer');
  heading.textContent = name;

  const taskBtn = document.querySelector('.addTask');
  taskArr.forEach((task) => {
    list.insertBefore(createPopup(task), taskBtn);
  });
};

const newProject = () => {
  const color = [
    '#b71c1c',
    '#f44336',
    '#e91e63',
    '#880e4f',
    '#9c27b0',
    '#4a148c',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#0d47a1',
    '#03a9f4',
    '00acc1',
    '#00897b',
    '#4caf50',
    '#1b5e20',
    '#00e676',
    '#8bc34a',
    '#cddc39',
    '#ffee58',
    '#ff3d00',
    '#795548',
    '#000000',
  ];
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.appendChild(modal);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modalContent');

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modalHeader');
  modalHeader.textContent = 'Add Project';

  const projectForm = document.createElement('form');
  projectForm.classList.add('projectForm');

  const nameLabel = document.createElement('label');
  nameLabel.id = 'projectName';
  nameLabel.textContent = 'Name:';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.id = 'projectName';

  const colorLabel = document.createElement('label');
  colorLabel.id = 'colorSelect';
  colorLabel.textContent = 'Color:';

  projectForm.appendChild(nameLabel);
  projectForm.appendChild(nameInput);
  projectForm.appendChild(colorLabel);

  const colorPalette = document.createElement('div');
  colorPalette.classList.add('colors');

  for (let i = 0; i < color.length; i += 1) {
    const colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'radio');
    colorInput.setAttribute('id', 'colorSelect');
    colorInput.setAttribute('name', 'colorSelect');
    colorInput.setAttribute('value', color[i]);
    colorInput.style.backgroundColor = color[i];
    colorInput.style.borderBlockColor = color[i];
    colorInput.style.color = color[i];

    colorPalette.appendChild(colorInput);
  }
  projectForm.appendChild(colorPalette);

  const notesLabel = document.createElement('label');
  const textArea = document.createElement('textarea');
  notesLabel.id = 'notes';
  notesLabel.textContent = 'Notes:';
  textArea.id = 'notes';
  textArea.setAttribute('rows', '6');
  textArea.setAttribute('cols', '50');
  textArea.placeholder = 'Write Personal notes';

  projectForm.appendChild(notesLabel);
  projectForm.appendChild(textArea);

  const modalFooter = document.createElement('div');
  modalFooter.classList.add('modalFooter');

  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add('modalBtn', 'newProjectBtn');
  newProjectBtn.setAttribute('type', 'submit');
  newProjectBtn.textContent = 'Add';

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('modalBtn', 'cancelBtn');
  cancelBtn.textContent = 'Cancel';

  cancelBtn.onclick = () => {
    modal.remove();
  };

  modalFooter.appendChild(newProjectBtn);
  modalFooter.appendChild(cancelBtn);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(projectForm);
  modalContent.appendChild(modalFooter);
  modal.appendChild(modalContent);
};

const updateTask = () => {

};
export {
  displayCard, displayProjects, updateTask, newProject,
};
