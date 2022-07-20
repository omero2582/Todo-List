import DateItem from "./Date-item";
const TodoItem = (name) => {
    let {getDate} = DateItem();
    let description, priority, dueDate;
    const setName = (string) => name = string;
    const setDescription = (string) => description = string;
    const setPriority = (string) => priority = string;
    const setDueDate = (string) => dueDate = new Date(string);  //can add an if to check if theres a valid string
                                                                //in case i want to display a blank date
    const getName = () => name;
    const getDescription = () => description;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    const getId = () => getDate().getTime();
    return {setName, setDescription, setDueDate, setPriority, getDate, getId, getName, getDueDate, getDescription, getPriority};
};

export default TodoItem;