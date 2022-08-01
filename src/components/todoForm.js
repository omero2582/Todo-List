import Todo from '../models/todo';
import events from "../pubsub";

    const modal = document.querySelector('.modal');
    const todoModal = {
        edit: false,
        form: modal.querySelector('.todo-form'),
        btnClose: modal.querySelector('.close-modal'),
        inputs: {
            name: modal.querySelector('#todo-name'),
            description: modal.querySelector('#todo-description'),
            priority: modal.querySelector('#todo-priority'),
            dueDate: modal.querySelector('#todo-due-date'),
            key: Math.floor(Math.random()*1000001),
        },
        
    }

    const submitTodo = e => {
        e.preventDefault();
        const {name, description, priority, dueDate, key} = todoModal.inputs;
        //checks if date Input is valid date, then assigns it as new date object, or null 
        let date = isNaN(Date.parse(dueDate.value)) ? null:  new Date(dueDate.value);
        const todo = new Todo(name.value, description.value, priority.value, date, key);

        //adds the Todo to the currently selected project
        if (todoModal.edit) {
            console.log(todo, 'YAH');
            events.emit('submitEditTodo', todo);
            todoModal.edit = false;
        } else {
            events.emit('addTodo', todo);
            todoModal.edit = false;
        }
        closeModal();
        todoModal.form.reset();
    };

    const openModal = () => {
        modal.style.display = 'block';
        todoModal.inputs.name.focus();
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    const editModal = ({name, description, priority, dueDate}) => {
        todoModal.inputs.name.value = name;
        todoModal.inputs.description.value = description;
        todoModal.inputs.priority.value = priority;
        todoModal.inputs.dueDate.value = dueDate;
        todoModal.edit = true;
        openModal();
        
    }

    todoModal.form.addEventListener('submit', submitTodo);
    todoModal.btnClose.addEventListener('click', () => closeModal());

    export {closeModal, modal, openModal, editModal};
    