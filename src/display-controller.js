import Project from "./Project";
import TodoItem from "./todo-item";
import events from "./pubsub";

const DisplayController = () => {
    //cache
    const myProjectsText = document.querySelector('.my-projects-txt');
    const listMyProjects = document.querySelector('.my-projects');
    const newProjectText = document.querySelector('.new-project-txt');
    const formNewProject = document.querySelector('.project-form');
    const btnCancelNewProject = document.querySelector('.cancel-project');
    
    const listProjectTodos = document.querySelector('.project-todos');
    const formNewTodo = document.querySelector('.todo-form');
    const newTodo = document.querySelector('.new-todo');
    const newTodoText = document.querySelector('.new-todo-txt');
    const btnCancelNewTodo = document.querySelector('.cancel-todo');
    const content = document.querySelector(".content");

    //cache inputs
    const inputNewProject = document.querySelector('#new-project');
    const inputNewTodo = document.querySelector('#new-todo');

    const submitNewProject = (e) => {
        e.preventDefault();
        console.log(inputNewProject.value);
        let p1 = Project(inputNewProject.value);
        events.emit('addProject', p1);
        closeForm();
        formNewProject.reset();
    };
    
    const submitNewTodo = (e) => {
        e.preventDefault();
        console.log(inputNewTodo.value);
        let t1 = TodoItem(inputNewTodo.value)
        events.emit('addTodo', t1);
        closeNewTodoForm();
        formNewTodo.reset();
        //TODO -- how do i know which project is being selected ???
        // maybe event emit will help handle
    };
    
    const openForm = () => {
        formNewProject.style.display = 'inline-block';
        console.log('form open');
    };

    const closeForm = () => {
        formNewProject.style.display = 'none';
        console.log('form close');
    };
    const openNewTodoForm = () => {
        formNewTodo.style.display = 'inline-block';
        console.log('newTodo form open');
    };

    const closeNewTodoForm = () => {
        formNewTodo.style.display = 'none';
        console.log('newTodo form close');
    };

    const renderProjectsBar  = (projectsArray) => {
        console.log('render Projects Bar')
        listMyProjects.innerHTML = '';
        
        listMyProjects.appendChild(myProjectsText);
        projectsArray.forEach(project => {
            const id = project.getDate().getTime();
            const li = document.createElement('li');
            const closeButton =document.createElement('span');
            closeButton.innerHTML = '&times';
            closeButton.classList.add('close-button');
            li.textContent = project.getName();
            li.classList.add('project');
            li.setAttribute('data-key', id);
            li.addEventListener('click', () => events.emit('selectProject', project));
            closeButton.addEventListener( 'click', e => {
                e.stopPropagation();    //stops the li click event, and only fires this close btn event
                events.emit('removeProject', id);   
            });
            li.appendChild(closeButton);
            listMyProjects.appendChild(li);
        });
    };

    const renderProjectTodos = (project) => {
        console.log(`---render projectTodos for ${project.getName()}`);
        content.innerHTML = '';
        listProjectTodos.innerHTML = '';
        project.getTodoItems().forEach( item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = item.getName();
            itemDiv.classList.add('todo-item');
            listProjectTodos.appendChild(itemDiv);
        });
        content.appendChild(listProjectTodos);
        content.appendChild(newTodo);
    };

    const renderNoSelection = () => {
        content.innerHTML = 'No Selection';
    };

     //bind
     newProjectText.addEventListener('click', openForm);
     formNewProject.addEventListener('submit', submitNewProject);
     btnCancelNewProject.addEventListener('click', closeForm);
     formNewTodo.addEventListener('submit', submitNewTodo);
     
    newTodoText.addEventListener('click', openNewTodoForm);
    btnCancelNewTodo.addEventListener('click', closeNewTodoForm)

    return {renderProjectsBar, renderProjectTodos, renderNoSelection};
};

export default DisplayController;