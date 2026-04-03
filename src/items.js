export class Task {
    constructor (title, description, dueDate, priority, projectId, completed = false, ) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId;
        this.completed = completed;
    }
}

export class Project {
    constructor (title, completed = false) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.completed = completed;
    }
}

export class List {
    constructor () {
        this.items = [];
    }

    addItem(itemObj) {
        this.items.push(itemObj);
    }

    removeItem(itemIdToRemove) {
        this.items = this.items.filter(item => item.id !== itemIdToRemove);
    }
}