import DateItem from "./Date-item";
const TodoItem = (name) => {
    let {getDateCreated, setDateCreated} = DateItem();
    let description;
    let priority;
    let dueDate;
    const setName = (string) => name = string;
    const setDescription = (string) => description = string;
    const setPriority = (string) => priority = string;
    const setDueDate = (string) => dueDate = new Date(string);  //can add an if to check if theres a valid string
                                                                //in case i want to display a blank date
    const getName = () => name;
    const getDescription = () => description;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    const getId = () => getDateCreated().getTime();
    const toJSON = () => Object.freeze({name, description, priority, dueDate, dateCreated: getDateCreated()});
    return Object.freeze({name, description, priority, dueDate, toJSON, setName, setDescription, setDueDate, setPriority, getName, getDescription, getDueDate, getPriority, getDateCreated, setDateCreated, getId});
};

export default TodoItem;