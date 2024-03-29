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

const saveData = () => {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    console.log(JSON.stringify(allProjects));
};

const clearAllProjects = () => {
    allProjects = [];
};

const addProject = (project) => {
    allProjects.push(project);
    if (allProjects.length == 1){
        selectProject(project);
        //selectedProject includes d1.renderProjectsBar
    }else{
        d1.renderProjectsBar(allProjects, selectedProject);
    }
    //sortBy(sortInput.value);
    //bookId++;
    saveData();
};

const removeProject = (id) => {
    let index = allProjects.findIndex(project => project.getId() === id);
    allProjects.splice(index, 1)
    d1.renderProjectsBar(allProjects, selectedProject);
    console.log(`removed project index ${id}`);
    if (index == selectedProject.getId() || allProjects.length == 0){
        d1.renderNoSelection();
    }
    saveData();
};

const addTodoToSelected = (todoItem) =>{
    console.log(`added ${todoItem.getName()} to ${selectedProject.getName()}`);
    selectedProject.addItem(todoItem);
    d1.renderProjectTodos(selectedProject);
    saveData();
};

const selectProject = (project) => {
    selectedProject = project;
    d1.renderProjectsBar(allProjects, selectedProject);
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
    //TODOOOOOO clean this clean this telcvjaelejalejclalj
    //TODO this is horrible but bandaid fix, since we store time as null when input is empty
    if (sortBy.dueDate){
        selectedProject.getTodoItems().sort( (a,b) => {
            if (a.getDueDate() == null || b.getDueDate() == null){
                return -1;
            } 
            return a.getDueDate().getTime() - b.getDueDate().getTime() 
        });
    }else{
        selectedProject.getTodoItems().sort( (a,b) => {
            if (a.getDueDate() == null || b.getDueDate() == null){
                return -1;
            } 
            return b.getDueDate().getTime() - a.getDueDate().getTime() 
        });
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

const selectTodoItem = (todoItem) =>{
    // const todoItem = selectedProject.getTodoItems().find(item => item.getId() == id);
    selectedTodoItem = todoItem;
    d1.renderEditTodoModal(todoItem);
};

const submitEditTodo = ({name, description, priority, dueDate}) => {

    selectedTodoItem.setName(name);
    selectedTodoItem.setDescription(description);
    selectedTodoItem.setPriority(priority);
    selectedTodoItem.setDueDate(dueDate);
    d1.renderProjectTodos(selectedProject);
    console.log(`${name} updated!`);
    saveData();
};

const parseFromJSON = (JSONarray) => {
    //localStorage retrieve
    clearAllProjects();
    const allProjectsParsed = JSON.parse(JSONarray);
    allProjectsParsed.forEach( (project) => {
        const {name, dateCreated, todoItems} = project;
        const p1 = Project(name);
        p1.setDateCreated(dateCreated);

        //loop through todoItems and re-create the real objects
        todoItems.forEach( item => {
            const {name, description, priority, dueDate, dateCreated} = item;
            const t1 = TodoItem(name);
            t1.setDescription(description);
            t1.setPriority(priority);
            t1.setDueDate(dueDate);
            t1.setDateCreated(dateCreated);
            p1.addItem(t1);
        });

        //add Project to allProjects
        addProject(p1);
    });

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
events.on('selectTodoItem', selectTodoItem);

events.on('submitEditTodo', submitEditTodo);





const testAddTODOItems = () => {
    const t1 = TodoItem('first Todo');
    t1.setDescription('1st item desc');
    t1.setPriority('1');
    t1.setDueDate(new Date('2022-07-30'));
    addTodoToSelected(t1);

    const t2 = TodoItem('second Todo');
    t2.setDescription('2nd item desc');
    t2.setPriority('2');
    t2.setDueDate(new Date('2022-09-01'));
    addTodoToSelected(t2);
};


const b1 = document.createElement('button');
b1.textContent= 'Save Data';
document.body.appendChild(b1);
b1.addEventListener('click', () => saveData());


const loadedProjects = localStorage.getItem('allProjects');
if (!loadedProjects){
    addProject(Project('Default'));
    testAddTODOItems();
}else{
    parseFromJSON(loadedProjects);
}






// !!!!!!! TODO 
// we dont know which project to add the new todo to
// from just the display Controllers' new Todo submit
//maybe have a global projectSelected here ?
//TODO prob take out the rendering TodoList inside displayController after selecting a project,
// and instead call it from out here. not sure

//all this kinda half done now ^^^^