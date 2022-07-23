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
let selectedTodoItem;
let d1 = DisplayController();
const sortBy = {
    name: true,
    description: true,
    dueDate: true,
    priority: true,
};

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
    let index = allProjects.findIndex(project => project.getId() === id);
    allProjects.splice(index, 1)
    d1.renderProjectsBar(allProjects);
    console.log(`removed project index ${id}`);
    if (index == selectedProject.getId() || allProjects.length == 0){
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

const sortCreationDate = () =>{
    if (sortBy.creationDate){
        selectedProject.getTodoItems().sort( (a,b) => b.getId() - a.getId());
    }else{
        selectedProject.getTodoItems().sort( (a,b) => a.getId() - b.getId());
    }
    sortBy.creationDate = !(sortBy.creationDate);
    d1.renderProjectTodos(selectedProject);
};

const sortDueDate = () =>{
    if (sortBy.dueDate){
        selectedProject.getTodoItems().sort( (a,b) => a.getDueDate().getTime() - b.getDueDate().getTime());
    }else{
        selectedProject.getTodoItems().sort( (a,b) => b.getDueDate().getTime() - a.getDueDate().getTime());
    }
    sortBy.dueDate = !(sortBy.dueDate);
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

const selectTodoItemRow = (todoItem) =>{
    // const todoItem = selectedProject.getTodoItems().find(item => item.getId() == id);
    selectedTodoItem = todoItem;
    d1.renderEditTodoModal(todoItem);
};

const submitEditTodo = () => {
    d1.submitEditTodo(selectedTodoItem);
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
events.on('sortDueDate', sortDueDate);
events.on('sortPriority', sortPriority);
events.on('selectTodoItemRow', selectTodoItemRow);

events.on('submitEditTodo', submitEditTodo);

d1.renderNoSelection();
const p1 = Project('test');
addProject(Project('Default'));

// !!!!!!! TODO 
// we dont know which project to add the new todo to
// from just the display Controllers' new Todo submit
//maybe have a global projectSelected here ?
//TODO prob take out the rendering TodoList inside displayController after selecting a project,
// and instead call it from out here. not sure

//all this kinda half done now ^^^^