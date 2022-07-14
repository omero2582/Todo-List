import './style.css';
import TodoItem from './todo-item';
import Project from './Project';
import DisplayController from './display-controller';
import events from './pubsub';
//TODO think about ID setting for Projects when you load them from localStorage...
// id counter will end up resetting to 0, and new Book IDs will CLASH
// have to save the currentID counter somewhere in the JSON ?? 
// either way, dont know if I should set the ID here, or inside Projects' prototype
// Same problem will happen with our old Library project
let allProjects = [];
let selectedProject;
let d1 = DisplayController();

const addProject = (project) => {
    allProjects.push(project)
    d1.renderProjectsBar(allProjects);
    console.log(`added ${project.getName()} in index`);
    if (allProjects.length == 1){
        selectProject(project);
    };
    //sortBy(sortInput.value);
    //bookId++;
};

const removeProject = (id) => {
    let index = allProjects.findIndex(project => project.getDate().getTime() === id);
    allProjects.splice(index, 1)
    d1.renderProjectsBar(allProjects);
    console.log(`removed project index ${id}`);
    if (index == selectedProject.getDate().getTime() || allProjects.length == 0){
        d1.renderNoSelection();
    }
};

const addTodoToSelected = (todoItem) =>{
    selectedProject.addItem(todoItem);
    d1.renderProjectTodos(selectedProject);
    console.log(`added ${todoItem.getName()} to ${selectedProject.getName()}`);
};

const selectProject = (project) => {
    selectedProject = project;
    d1.renderProjectTodos(project);
};

//events
events.on('addProject', addProject);
events.on('removeProject', removeProject);
events.on('addTodo', addTodoToSelected); 
events.on('selectProject', selectProject);


// !!!!!!! TODO 
// we dont know which project to add the new todo to
// from just the display Controllers' new Todo submit
//maybe have a global projectSelected here ?
//TODO prob take out the rendering TodoList inside displayController after selecting a project,
// and instead call it from out here. not sure

//all this kinda half done now ^^^^