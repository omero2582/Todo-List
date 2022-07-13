import DateItem from "./Date-item";
const TodoItem = (name) => {
    let {getDate} = DateItem();
    let description, priority, dueDate;
    const setName = (string) => name = string;
    const setDescription = (string) => description = string;
    const setPriority = (string) => priority = string;
    const setDueDate = (string) => dueDate = string;
    const getName = () => name;
    const getDescription = () => description;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    return {setName, setDescription, setDueDate, setPriority, getDate, getName, getDueDate, getDescription, getPriority};
};

export default TodoItem;