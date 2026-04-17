import "./styles.css";
import { Task, List, Project } from "./items.js";
import { render } from "./dom.js";

export const projectList = new List ();
export const taskList = new List();
export let activeProject = 'ALL';


function serveDefaultTasks() {
      const defaultProject = new Project('My Tasks');
      const defaultTask = new Task('Welcome to TaskMaster', 'Hello there', '04/11/2026', 1, defaultProject.id, false);

      projectList.addItem(defaultProject);
      taskList.addItem(defaultTask);
}

//add Project Form
const addProjectTitle = document.querySelector('#add-project-title');
const addProjectForm = document.querySelector('#add-project');

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newProject = new Project(addProjectTitle.value);
    projectList.addItem(newProject);
    addProjectTitle.value = null;
    render();
});

//Add-Task form
const addTaskForm = document.getElementById("add-task");
//prevent default and fire formdata event
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    new FormData(addTaskForm);
})

addTaskForm.addEventListener("formdata", (e) => {
    const data = Object.fromEntries(e.formData);
    const {
        "add-task-title" : addTaskTitle,
        "add-date": addDate,
        "add-priority" : addPriority,
        "project-id" : projectId,
    } = data;
    const taskToAdd = new Task(addTaskTitle, null, addDate, addPriority, projectId);
    taskList.addItem(taskToAdd);
    addTaskForm.reset();
    render();
})

//event listener for tasks !!!
document.querySelector('.content').addEventListener ('click', (e) => {
    if (e.target.id === 'delete') {
        const id = e.target.closest('.task-wrapper').dataset.id;
        taskList.removeItem(id)
        render();
    };
})

//event listener for active project
document.querySelector('.projects').addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        activeProject = e.target.dataset.id;
        render();
    }

})

if (taskList.populateFromStorage('taskList') && projectList.populateFromStorage('projectList')) {
    render();
} else {
    serveDefaultTasks();
    render();
}