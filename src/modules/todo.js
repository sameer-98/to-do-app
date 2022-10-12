import { format } from 'date-fns';

const todos = (name, description, priority, dueDate) => {
  // returns name of todo
  const getName = () => name;
  // returns priority of todo
  const getPriority = () => priority;
  // returns due date of todo
  const getDueDate = () => dueDate;
  // returns formatted due date
  const getFormattedDate = () => format(new Date(dueDate), 'MM/dd/yyyy');

  return {
    getName, getPriority, getDueDate, getFormattedDate,
  };
};

export default todos;
