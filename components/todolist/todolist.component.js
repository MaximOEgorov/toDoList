import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { Header } from "./Header/Header.js";
import { TasksList } from "./TasksList/TasksList.js";
import {addNewTaskDialog} from "./AddNewTaskDialog/addNewTaskDialog.component.js";

export function Todolist(data) {
    const container = document.createElement('div');
    
    const headerElement = Header(data.title);
    const tasksListElement = TasksList(data.tasks);
    const buttonsElement = ButtonsPanel();
    const dialog = addNewTaskDialog();

    container.append(headerElement);
    container.append(tasksListElement);
    container.append(buttonsElement);
    container.append(dialog);

    return container;
}

