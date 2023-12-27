import {DeleteButton} from "./DeleteButton/DeleteButton.js";

export function Task(task) {
    const container = document.createElement('li');
    container.append(task.title);
    const deleteButtonElement = DeleteButton(task.id);
    container.append(deleteButtonElement)
    return container;
}

