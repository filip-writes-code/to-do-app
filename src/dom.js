import { projectList, taskList } from "./index.js";

const contentDiv = document.querySelector('.content');

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

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
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

const addTaskToDom = (taskObj) => {
    contentDiv.appendChild(createTaskWrapperLayout(taskObj));
}

export const renderTasks = () => {
    contentDiv.innerHTML = '';
    taskList.items.forEach(task => {
        addTaskToDom(task)
    });
}