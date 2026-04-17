import { projectList, taskList } from "./index.js";

const storage = window["localStorage"];

function storageAvailable() {
  try {
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function populateStorage() {
    if (storageAvailable()) {
        storage.setItem("taskList", JSON.stringify(taskList.items));
        storage.setItem("projectList", JSON.stringify(projectList.items));
    } else {
        console.log('Local storage NOT available')
    }
}

export function readFromStorage(storageKey) {
  return JSON.parse(storage.getItem(storageKey));
}