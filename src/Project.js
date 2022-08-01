import TodoItem from './todo-item';
import DateItem from './Date-item';

const Project = (name) =>{
    let {getDateCreated, setDateCreated} = DateItem();
    let todoItems = [];
    const getName = () => name;
    const getTodoItems = () => todoItems;
    const setName = (string) => name = string;
    const addItem = (todoItem) => todoItems.push(todoItem);
    const removeItem = (timeInMs) => todoItems.find(item => item.getDate().getTime() === timeInMs);
    const getId = () => getDateCreated().getTime();
    const toJSON = () => Object.freeze({name, todoItems, dateCreated: getDateCreated()});
    return Object.freeze({getTodoItems, getName, getDateCreated, setDateCreated, getId, setName, addItem, removeItem, toJSON, todoItems}); 
};

export default Project;

//d1.toLocaleTimeString() = 8:05:33 AM