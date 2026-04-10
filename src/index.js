import "./styles.css";
import { Task, List, Project } from "./items.js";
import { render } from "./dom.js";

export const projectList = new List ();
export const taskList = new List();

const defaultProject = new Project('My Tasks');
const defaultTask = new Task('Welcome to TaskMaster', 'Hello there', '04/11/2026', 1, defaultProject.id, false);

projectList.addItem(defaultProject);
taskList.addItem(defaultTask);
render();

//add Project Form
const addProjectTitle = document.querySelector('#add-project-title');
const addProjectForm = document.querySelector('#add-project');

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(addProjectTitle.value)
    const newProject = new Project(addProjectTitle.value);
    projectList.addItem(newProject);
    addProjectTitle.value = null;
    render();
});