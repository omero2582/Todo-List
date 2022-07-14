import TodoItem from './todo-item';
import DateItem from './Date-item';

const Project = (name) =>{
    let dateProto = DateItem();
    let todoItems = [];
    const getName = () => name;
    const getTodoItems = () => todoItems;
    const setName = (string) => name = string;
    const addItem = (todoItem) => todoItems.push(todoItem);
    const removeItem = (timeInMs) => todoItems.find(item => item.getDate().getTime() === timeInMs);
    return Object.assign({}, dateProto,
        {getName, getTodoItems, setName, addItem, removeItem}); 
};

export default Project;

//d1.toLocaleTimeString() = 8:05:33 AM