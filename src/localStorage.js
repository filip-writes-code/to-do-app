import { projectList, taskList } from "./index.js";

function storageAvailable() {
  let storage;
  try {
    storage = window["localStorage"];
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
        const storage = window["localStorage"];
        storage.setItem("taskList", JSON.stringify(taskList.items));
        storage.setItem("projectList", JSON.stringify(projectList.items));
    } else {
        console.log('Local storage NOT available')
    }
}