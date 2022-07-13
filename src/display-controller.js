const DisplayController = () => {
    //cache
    const projectsUl = document.querySelector('.options-2');
    const myProjectsText = document.querySelector('.my-projects');
    const newProject = document.querySelector('.new-project');
    const projectForm = document.querySelector('.project-form');
    const content = document.querySelector('.content');
    const btnSubmitProject = document.querySelector('.submit-project');
    const btnCancelProject = document.querySelector('.cancel-project');

    //cache inputs
    const projectInput = document.querySelector('#new-project');

    const submitForm = (e) => {
        e.preventDefault();
        console.log(projectInput.value);
    };
    
    const openForm = () => {
        projectForm.style.display = 'inline-block';
        console.log('form open');
    };

    const closeForm = () => {
        projectForm.style.display = 'none';
        console.log('form close');
    };

    const renderProjectsBar  = (projectsArray) => {
        projectsUl.innerHTML = '';
        
        projectsUl.appendChild(myProjectsText);
        projectsArray.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.getName();
            projectsUl.appendChild(li);       
        });
    };

    const renderProjectTodos = (project) => {
        content.innerHTML = '';
        project.getTodoItems().forEach( item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = item.getName();
            itemDiv.classList.add('todo-item');
            content.appendChild(itemDiv);
        });
    };

     //bind
     newProject.addEventListener('click', openForm);
     projectForm.addEventListener('submit', submitForm);
     btnCancelProject.addEventListener('click', closeForm);
     


    return {renderProjectsBar, renderProjectTodos};
};

export default DisplayController;