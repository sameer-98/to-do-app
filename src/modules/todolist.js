import todos from './todo';
import project from './project';

const list = () => {
  const projects = [];

  const getProject = (projectName) => {
    projects.find((proj) => proj.getName() === projectName);
  };

  return { getProject };
};

export default list;
