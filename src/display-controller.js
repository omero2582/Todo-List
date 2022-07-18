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
    const listProjectTodos = document.querySelector('.project-todos');
    const projectTodoOptions = document.querySelector('.project-todo-options');
    const newTodoText = document.querySelector('.new-todo-txt');

    //modal newTodo
    const modal = document.querySelector('.modal');
    const formNewTodo = document.querySelector('.todo-form');
    const btnCloseModal = document.querySelector('.close-modal');
    //newTodo inputs
    const newTodoName = document.querySelector('#todo-name');
    const newTodoDescription = document.querySelector('#todo-description');
    const newTodoPriority = document.querySelector('#todo-priority');
    const newTodoDueDate = document.querySelector('#todo-due-date');

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
        listProjectTodos.innerHTML = '';
        project.getTodoItems().forEach( item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = item.getName();
            itemDiv.classList.add('todo-item');
            listProjectTodos.appendChild(itemDiv);
        });
        content.appendChild(listProjectTodos);
        content.appendChild(projectTodoOptions);
        closeNewTodoModal();
        formNewTodo.reset();
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

    return {renderProjectsBar, renderProjectTodos, renderNoSelection, openNewTodoModal};
};

export default DisplayController;

//TODO
//let clone = template.content.cloneNode(true);
// ^^ with ES6 template
// maybe not actually... works fine now, just have to conclude whether or not it is good practice to 
// cache the new projects UL, and then set the .content and the UL's innerHtml to empty
// then append back in the UL