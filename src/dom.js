import { projectList, taskList, activeProject } from "./index.js";

const contentDiv = document.querySelector('.content');
const projectContentDiv = document.querySelector('.projects-content');
const projectDropdown = document.getElementById('project-id');

const createTaskWrapperLayout = (task) => {
    const {
        id,
        title,
        description,
        dueDate,
        priority,
        projectId,
        completed} = task;
    //create task-wrapper div
    const taskWrapper = document.createElement('div')
    taskWrapper.classList.add('task-wrapper');
    taskWrapper.dataset.id = id;
    //create all divs
    const taskDiv = document.createElement('div')
    const titleDiv = document.createElement('div')
    const dueDateDiv = document.createElement('div')
    const priorityDiv = document.createElement('div')
    const actionsDiv = document.createElement('div')
    //assign classes to divs
    taskDiv.classList.add('task');
    titleDiv.classList.add('title');
    dueDateDiv.classList.add('due-date');
    priorityDiv.classList.add('priority');
    actionsDiv.classList.add('actions');
    //create other elements
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.id = "edit"

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.id = "delete"
    //populate text
    titleDiv.innerText = title;
    dueDateDiv.innerText = dueDate;
    priorityDiv.innerText = priority;
    //assemble the task card
    taskWrapper.appendChild(taskDiv);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(dueDateDiv);
    taskDiv.appendChild(priorityDiv);
    taskDiv.appendChild(actionsDiv);
    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);

    if (completed) {
        titleDiv.classList.add('completed');
        checkbox.checked = true;
    }

    return taskWrapper;
}

const createProjectWrapper = (projectObj) => {
    const {
        id,
        title,
        completed} = projectObj;
    const projectWrapper = document.createElement('button');
    projectWrapper.dataset.id = id;
    projectWrapper.textContent = title;
    if (activeProject === id) {projectWrapper.classList.add('active-project')}
    return projectWrapper;
}

const createProjectDropdownItem = (projectObj) => {
    const {
        id,
        title,
        completed} = projectObj;
    const projectOption = document.createElement('option');
    projectOption.value = id;
    projectOption.textContent = title;
    return projectOption;
}

const addTaskToDom = (taskObj) => {
    contentDiv.appendChild(createTaskWrapperLayout(taskObj));
}

const addProjectToDom = (projectObj) => {
    projectContentDiv.appendChild(createProjectWrapper(projectObj));
}

const addProjectToDropdown = (projectObj) => {
    projectDropdown.appendChild(createProjectDropdownItem(projectObj));
}

export const renderTasks = () => {
    contentDiv.innerHTML = '';
    if (activeProject === "ALL") {
        taskList.items.forEach(task => {
        addTaskToDom(task)
        })
    } else {
        taskList.items.filter((item) => item.projectId === activeProject)
        .forEach(task => {
        addTaskToDom(task)
        })
    }
}

export const renderProjects = () => {
    projectContentDiv.innerHTML = '';
    projectDropdown.innerHTML = '';
    projectList.items.forEach(project => {
        addProjectToDom(project);
        addProjectToDropdown(project);
    })
}

export const render = () => {
    renderTasks();
    renderProjects();
}