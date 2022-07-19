import Project from "./Project";
import TodoItem from "./todo-item";
import events from "./pubsub";

const DisplayController = () => {
    //cache
    //sidebar
    const myProjectsText = document.querySelector('.my-projects-txt');//remove this 1, place it outside the UL instead 
                                                                    //and wrap the whole thing in a div.
                                                                    // JK we need this cache anyways for when we click on this ->  show projects in .content
    const listMyProjects = document.querySelector('.my-projects');
    const newProjectText = document.querySelector('.new-project-txt');
    const formNewProject = document.querySelector('.project-form');
    const btnCancelNewProject = document.querySelector('.cancel-project');
    //newProject
    const newProjectName = document.querySelector('#new-project');
    
    //content
    const content = document.querySelector(".content");
    const tableProjectTodos = document.querySelector('.todos-table');
    const projectTodoOptions = document.querySelector('.project-todo-options');
    const newTodoText = document.querySelector('.new-todo-txt');
    const todosHeader = document.querySelector('.todos-header');

    //modal newTodo
    const modal = document.querySelector('.modal');
    const formNewTodo = document.querySelector('.todo-form');
    const btnCloseModal = document.querySelector('.close-modal');
    //newTodo inputs
    const newTodoName = document.querySelector('#todo-name');
    const newTodoDescription = document.querySelector('#todo-description');
    const newTodoPriority = document.querySelector('#todo-priority');
    const newTodoDueDate = document.querySelector('#todo-due-date');

    //table headers
    const nameHeader= document.querySelector('.name-header');
    const descriptionHeader= document.querySelector('.description-header');
    const dateHeader= document.querySelector('.date-header');
    const priorityHeader= document.querySelector('.priority-header');

    const checkTarget = (e) => {
        if (e.target === modal){
            closeNewTodoModal(e);
        }
    }

    const submitNewProject = (e) => {
        e.preventDefault();
        let p1 = Project(newProjectName.value);
        events.emit('addProject', p1);
        closeNewProjectForm();
        formNewProject.reset();
    };
    
    const submitNewTodo = (e) => {
        e.preventDefault();
        let t1 = TodoItem(newTodoName.value);
        t1.setDescription(newTodoDescription.value);
        t1.setPriority(newTodoPriority.value);
        t1.setDueDate(newTodoDueDate.value);
        events.emit('addTodo', t1);
        closeNewTodoModal();
        formNewTodo.reset();
    };
    
    const openNewProjectForm = () => {
        formNewProject.style.display = 'inline-block';
        newProjectName.focus();
    };

    const closeNewProjectForm = () => {
        formNewProject.style.display = 'none';
    };
    const openNewTodoModal = () => {
        modal.style.display = 'initial';
        newTodoName.focus();
    };

    const closeNewTodoModal = () => {
        modal.style.display = 'none';
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
        tableProjectTodos.innerHTML = '';
        tableProjectTodos.appendChild(todosHeader);
        const tableBody = getTodoTableBody(project.getTodoItems());
        tableProjectTodos.appendChild(tableBody);
        content.appendChild(tableProjectTodos);
        content.appendChild(projectTodoOptions);
        closeNewTodoModal();
        formNewTodo.reset();
    };

    const getTodoTableItemRow = ({getName, getDescription, getDate, getPriority}) =>{
        const todoItemInfo = [getName(), getDescription(), getDate().toDateString(), getPriority()];
        const tableRow = document.createElement('tr');
        todoItemInfo.forEach(property => {
            const tableData = document.createElement('td');
            tableData.textContent = property;
            tableRow.appendChild(tableData);
        });
        return tableRow;
    };

    const getTodoTableBody = (todoItems) => {
        const tableBody = document.createElement('tbody');
        todoItems.forEach(item => tableBody.appendChild(getTodoTableItemRow(item)));
        return tableBody;
    };

    const renderNoSelection = () => {
        content.innerHTML = 'No Selection';
    };

     //bind
     newProjectText.addEventListener('click', openNewProjectForm);
     formNewProject.addEventListener('submit', submitNewProject);
     btnCancelNewProject.addEventListener('click', closeNewProjectForm);
     formNewTodo.addEventListener('submit', submitNewTodo);
     
     newTodoText.addEventListener('click', openNewTodoModal);

     //modal
     window.addEventListener('click', checkTarget);
     btnCloseModal.addEventListener('click', closeNewTodoModal);

     //table
     nameHeader.addEventListener('click', () => events.emit('sortName'));
     descriptionHeader.addEventListener('click', () => events.emit('sortDescription'));
     dateHeader.addEventListener('click', () => events.emit('sortDate'));
     priorityHeader.addEventListener('click', () => events.emit('sortPriority'));

    return {renderProjectsBar, renderProjectTodos, renderNoSelection, openNewTodoModal};
};

export default DisplayController;

//TODO
//let clone = template.content.cloneNode(true);
// ^^ with ES6 template
// maybe not actually... works fine now, just have to conclude whether or not it is good practice to 
// cache the new projects UL, and then set the .content and the UL's innerHtml to empty
// then append back in the UL