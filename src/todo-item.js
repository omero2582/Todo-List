import DateItem from "./Date-item";
const TodoItem = (name) => {
    let {getDateCreated, setDateCreated} = DateItem();
    let description;
    let priority;
    let dueDate;
    const setName = (string) => name = string;
    const setDescription = (string) => description = string;
    const setPriority = (string) => priority = string;
    const setDueDate = (string) => {
        //TODO solved. Was really confusing, but when Date input is blank, it did new Date('');
        //this read as 'Invalid Date' when you console logged it, however Date has a toJSON which stored this value as 'null' when JSON.stringify

        dueDate = isNaN(Date.parse(string)) ? null:  new Date(string);
        console.log(`'${dueDate}' set as date`);
        //We can now use Date.parse which will return a number if the dateString would be recognized in 'new Date(dateString)'. solves it i think
    };  
    const getName = () => name;
    const getDescription = () => description;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    const getId = () => getDateCreated().getTime();
    const toJSON = () => Object.freeze({name, description, priority, dueDate, dateCreated: getDateCreated()});
    return Object.freeze({name, description, priority, dueDate, toJSON, setName, setDescription, setDueDate, setPriority, getName, getDescription, getDueDate, getPriority, getDateCreated, setDateCreated, getId});
};

export default TodoItem;