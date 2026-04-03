import "./styles.css";

import { Task, List, Project } from "./items.js";
import { renderDOM } from "./dom.js";

export const projectList = new List ();
export const taskList = new List();

const defaultProject = new Project('My tasks');
const defaultTask = new Task('Welcome to TaskMaster!', 'Hello there', '1', 1, defaultProject.id, false);

projectList.addItem(defaultProject);

taskList.addItem(defaultTask);

renderDOM();