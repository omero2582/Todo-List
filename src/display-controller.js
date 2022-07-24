import Project from "./Project";
import TodoItem from "./todo-item";
import events from "./pubsub";
import { formatDistanceToNow } from 'date-fns';

const DisplayController = () => {
    //cache
    //sidebar
    const myProjectsText = document.querySelector('.my-projects-txt');// need to add when we click on this ->  show projects in .content
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

    //table headers
    const nameHeader= document.querySelector('.name-header');
    const descriptionHeader= document.querySelector('.description-header');
    const dateHeader= document.querySelector('.date-header');
    const priorityHeader= document.querySelector('.priority-header');

    //modal Todo template
    const template = document.querySelector('.modal-template');

    //modal newTodo
    const clone1 = template.content.cloneNode(true);
    const modal = clone1.querySelector('.modal');
    document.body.appendChild(modal);
    const formNewTodo = modal.querySelector('.todo-form');
    const btnCloseModal = modal.querySelector('.close-modal');
    //inputs newTodo
    const newTodoName = modal.querySelector('#todo-name');
    const newTodoDescription = modal.querySelector('#todo-description');
    const newTodoPriority = modal.querySelector('#todo-priority');
    const newTodoDueDate = modal.querySelector('#todo-due-date');

    //modal editTodo
    const cloneEdit = template.content.cloneNode(true);
    const modalEditTodo = cloneEdit.querySelector('.modal');
    document.body.appendChild(modalEditTodo);
    const formEditTodo = modalEditTodo.querySelector('.todo-form');
    const btnCloseEditModal = modalEditTodo.querySelector('.close-modal');
    //inputs editTodo
    const editTodoName = modalEditTodo.querySelector('#todo-name');
    const editTodoDescription = modalEditTodo.querySelector('#todo-description');
    const editTodoPriority = modalEditTodo.querySelector('#todo-priority');
    const editTodoDueDate = modalEditTodo.querySelector('#todo-due-date');


    const checkTarget = (e) => {
        if (e.target === modal){
            closeModal(modal);
        }else if (e.target == modalEditTodo){
            closeModal(modalEditTodo);
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
        closeModal(modal);
        formNewTodo.reset();
    };
    
    const openNewProjectForm = () => {
        formNewProject.style.display = 'inline-block';
        newProjectName.focus();
    };

    const closeNewProjectForm = () => {
        formNewProject.style.display = 'none';
    };
    const openModal = (modal) => {
        modal.style.display = 'block';
        console.log(modal);
        newTodoName.focus();
    };

    const closeModal = (modal) => {
        modal.style.display = 'none';
    };

    const renderProjectsBar  = (projectsArray, selectedProject) => {
        console.log('render Projects Bar')
        listMyProjects.innerHTML = '';
        
        listMyProjects.appendChild(myProjectsText);
        projectsArray.forEach(project => {
            const id = project.getId();
            const li = document.createElement('li');
            const closeButton = document.createElement('span');
            closeButton.innerHTML = '&times';
            closeButton.classList.add('close-button');

            if (id == selectedProject.getId()){
                li.classList.add('selected');
            }

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

        const title = document.createElement('h2');
        title.textContent = project.getName();
        title.classList.add('project-title');
        content.appendChild(title);

        tableProjectTodos.innerHTML = '';
        tableProjectTodos.appendChild(todosHeader);
        const tableBody = getTodoTableBody(project.getTodoItems());
        tableProjectTodos.appendChild(tableBody);
        content.appendChild(tableProjectTodos);
        content.appendChild(projectTodoOptions);
        closeModal(modal);
        formNewTodo.reset();
    };

    const getTodoTableItemRow = (item) =>{
        const {getName, getDescription, getDueDate, getPriority, getId} = item;
        const todoItemInfo = [getName(), getDescription(), formatDistanceToNow(getDueDate()), getPriority()];     //getDueDate().toDateString()
        const tableRow = document.createElement('tr');
        todoItemInfo.forEach(property => {
            const tableData = document.createElement('td');
            tableData.textContent = property;
            tableRow.appendChild(tableData);
        });
        tableRow.addEventListener('click', () => events.emit('selectTodoItem', item));
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

    const submitEditTodo = () => {
        
        const newProperties = {
            name: editTodoName.value,
            description: editTodoDescription.value,
            priority: editTodoPriority.value,
            dueDate: editTodoDueDate.value,
        };

        events.emit('submitEditTodo', newProperties);
        
        closeModal(modalEditTodo);
        formEditTodo.reset();
        
    };

    const renderEditTodoModal = (todoItem) =>{
        console.log('renderEditTODO');

        editTodoName.value = todoItem.getName();
        editTodoDescription.value = todoItem.getDescription();
        editTodoPriority.value = todoItem.getPriority();
        editTodoDueDate.valueAsDate = todoItem.getDueDate(); 

        openModal(modalEditTodo);
    };

    //Bind
    //NewProject
    newProjectText.addEventListener('click', openNewProjectForm);
    formNewProject.addEventListener('submit', submitNewProject);
    btnCancelNewProject.addEventListener('click', closeNewProjectForm);

    //Modals
    window.addEventListener('click', checkTarget);

    //modal NewTodo
    formNewTodo.addEventListener('submit', submitNewTodo);
    newTodoText.addEventListener('click', () => openModal(modal));
    btnCloseModal.addEventListener('click', () => closeModal(modal));

    //modal EditTodo
    btnCloseEditModal.addEventListener('click', () => closeModal(modalEditTodo));
    formEditTodo.addEventListener('submit', e => {
        e.preventDefault();
        submitEditTodo();
        // events.emit('submitEditTodo');
    });

    //table
    nameHeader.addEventListener('click', () => events.emit('sortName'));
    descriptionHeader.addEventListener('click', () => events.emit('sortDescription'));
    dateHeader.addEventListener('click', () => events.emit('sortDueDate'));
    priorityHeader.addEventListener('click', () => events.emit('sortPriority'));


    return {renderProjectsBar, renderProjectTodos, renderNoSelection, openModal, renderEditTodoModal, submitEditTodo};
};

export default DisplayController;
