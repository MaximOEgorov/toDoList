import {DeleteButton} from "./DeleteButton/DeleteButton.js";
import {changeTaskEditMode, updateTask} from "../../../../data/data.js";

export function Task(task) {
    const container = document.createElement('li');
    container.addEventListener('dblclick', () => {
        changeTaskEditMode(task);
    });
    container.addEventListener('focusout', function() {

      task.editeMode &&  changeTaskEditMode(task);
    });
    console.log(task.id);
    if (task.editeMode) {
        const inputElement = document.createElement('input');
        inputElement.setAttribute("id", task.id)
        inputElement.value = task.title;
        container.append(inputElement);



       inputElement.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                // Действия, которые нужно выполнить при нажатии Enter
                updateTask(task, inputElement.value);
            }
        });
    } else {
        container.append(task.title);
    }


    const deleteButtonElement = DeleteButton(task.id);
    container.append(deleteButtonElement)
    return container;
}

