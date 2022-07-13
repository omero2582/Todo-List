import './style.css';
import TodoItem from './todo-item';
import Project from './Project';
import DisplayController from './display-controller';
//TODO think about ID setting for Projects when you load them from localStorage...
// id counter will end up resetting to 0, and new Book IDs will CLASH
// have to save the currentID counter somewhere in the JSON ?? 
// either way, dont know if I should set the ID here, or inside Projects' prototype
// Same problem will happen with our old Library project
let allProjects = [];
window.TodoItem = TodoItem;
window.Project = Project;
window.displayController = DisplayController;

let d1 = displayController();

/*
let d1 = displayController();
let p1 = Project('First P');
p1.addItem(TodoItem('first Todo'));
d1.renderProjectsBar([p1]);
d1.renderProjectTodos(p1);
*/
// p1.addItem(TodoItem('second Todo'));
// p1.addItem(TodoItem('third Todo'));