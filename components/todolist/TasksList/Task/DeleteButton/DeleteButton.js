import {deleteTask} from "../../../../../data/data.js";

export function DeleteButton(taskId) {
    const deleteButtonElement = document.createElement('button')
    deleteButtonElement.append('❌')
    deleteButtonElement.addEventListener('click', () => {
        deleteTask(taskId)
    })
    return deleteButtonElement;
}