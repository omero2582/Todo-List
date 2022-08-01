class Todo{
    
    constructor(name, description = '-', priority = '-', dueDate){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getDueDate() {
        return this.dueDate;
    }
    getPriority() {
        return this.priority;
    }
    setName(name){
        this.name = name;
    }
    setDescription(description) {
        this.description = description;
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
    setPriority(priority) {
        this.priority = priority;
    }
    
    

}

export default Todo