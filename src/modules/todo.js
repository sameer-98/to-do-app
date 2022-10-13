import { format } from 'date-fns';

const todos = (taskObj) => {
  // returns name of todo
  const getName = () => taskObj.title;
  // returns priority of todo
  const getPriority = () => taskObj.priority;
  // returns due date of todo
  const getDueDate = () => taskObj.dueDate;
  // returns formatted due date
  const getFormattedDate = () => format(new Date(taskObj.dueDate), 'MM/dd/yyyy');

  return {
    getName, getPriority, getDueDate, getFormattedDate,
  };
};

export default todos;
