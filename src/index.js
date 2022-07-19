import './style.css';
import TodoItem from './todo-item';
import Project from './Project';
import DisplayController from './display-controller';
import events from './pubsub';
import DateItem from './Date-item';
//TODO think about ID setting for Projects when you load them from localStorage...
// id counter will end up resetting to 0, and new Book IDs will CLASH
// have to save the currentID counter somewhere in the JSON ?? 
// either way, dont know if I should set the ID here, or inside Projects' prototype
// Same problem will happen with our old Library project
let allProjects = [];
let selectedProject;
let d1 = DisplayController();
const sortBy = {
    name: true,
    description: true,
    date: true,
    priority: true,
}

const addProject = (project) => {
    allProjects.push(project)
    d1.renderProjectsBar(allProjects);
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
    console.log(`added ${todoItem.getName()} to ${selectedProject.getName()}`);
    selectedProject.addItem(todoItem);
    d1.renderProjectTodos(selectedProject);
};

const selectProject = (project) => {
    selectedProject = project;
    d1.renderProjectTodos(project);
};

const sortName = () =>{
    if (sortBy.name){
        selectedProject.getTodoItems().sort( (t1, t2) => t1.getName().localeCompare(t2.getName()) );
    }else{
        selectedProject.getTodoItems().sort( (t1, t2) => t2.getName().localeCompare(t1.getName()) );
    }
    sortBy.name = !(sortBy.name);
    d1.renderProjectTodos(selectedProject);
};

const sortDescription = () =>{
    if (sortBy.description){
        selectedProject.getTodoItems().sort( (t1, t2) => t1.getDescription().length - t2.getDescription().length );
    }else{
        selectedProject.getTodoItems().sort( (t1, t2) => t2.getDescription().length - t1.getDescription().length );
    }
    sortBy.description = !(sortBy.description);
    d1.renderProjectTodos(selectedProject);
};

const sortDate = () =>{
    if (sortBy.date){
        selectedProject.getTodoItems().sort( (a,b) => b.getDate().getTime() - a.getDate().getTime());
    }else{
        selectedProject.getTodoItems().sort( (a,b) => a.getDate().getTime() - b.getDate().getTime());
    }
    sortBy.date = !(sortBy.date);
    d1.renderProjectTodos(selectedProject);
};

const sortPriority = () =>{
    if (sortBy.priority){
        selectedProject.getTodoItems().sort( (a,b) => a.getPriority() - b.getPriority());
    }else{
        selectedProject.getTodoItems().sort( (a,b) => b.getPriority() - a.getPriority());
    }
    sortBy.priority = !(sortBy.priority);
    d1.renderProjectTodos(selectedProject);
};

//events
events.on('addProject', addProject);
events.on('removeProject', removeProject);
events.on('addTodo', addTodoToSelected); 
events.on('selectProject', selectProject);

//table events
events.on('sortName', sortName);
events.on('sortDescription', sortDescription);
events.on('sortDate', sortDate);
events.on('sortPriority', sortPriority);

d1.renderNoSelection();
addProject(Project('Default'));

// !!!!!!! TODO 
// we dont know which project to add the new todo to
// from just the display Controllers' new Todo submit
//maybe have a global projectSelected here ?
//TODO prob take out the rendering TodoList inside displayController after selecting a project,
// and instead call it from out here. not sure

//all this kinda half done now ^^^^