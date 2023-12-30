import {data, subscribe} from './data/data.js';
import {Todolist} from './components/todolist/todolist.component.js'

subscribe(refreshUI);

function refreshUI() {
    const todolistElement = Todolist(data.todolist);

    const rootElement = document.getElementById('root');
    rootElement.innerHTML = '';
    rootElement.append(todolistElement);

/*    const inputElement = document.querySelector('input')
     if (inputElement){
         inputElement.focus()
     }*/

}

refreshUI();
