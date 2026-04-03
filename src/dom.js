import { projectList, taskList } from "./index.js";

const projects = document.querySelector('.nav-bar');
const tasks = document.querySelector('.content')


function renderProjects() {
    projectList.items.forEach(item => {
        const projectName = item.title;
        const projectItem = document.createElement('p');
        projectItem.innerText = projectName;
        projects.appendChild(projectItem);
    })
}


function renderTasks() {
    taskList.items.forEach(item => {
        const taskName = item.title;
        const taskItem = document.createElement('p');
        taskItem.innerText = taskName;
        tasks.appendChild(taskItem);
    })
}

export function renderDOM() {
    renderProjects();
    renderTasks();
}