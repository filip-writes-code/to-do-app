import { populateStorage, readFromStorage } from "./localStorage.js";

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
        populateStorage();
    }

    removeItem(itemIdToRemove) {
        this.items = this.items.filter(item => item.id !== itemIdToRemove);
        populateStorage();
    }

    populateFromStorage(storageKey) {
        const storageInput = readFromStorage(storageKey) 
        if (storageInput) {
            this.items = storageInput;
            return true;
        } else {
            console.log('No storage file: ' + storageKey);
            return false;
        }
    }
}