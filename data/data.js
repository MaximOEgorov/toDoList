export const data = {
    todolist: {
        id: createUniqId(),
        title: 'to Learn',
        tasks: [
            {
                id: createUniqId(),
                title: 'Learn HTML',
                editeMode: false,
            },
            {
                id: createUniqId(),
                title: 'Learn CSS',
                editeMode: false,
            }
        ],
        addNewTaskDialog: {
            isOpen: false,
            error: null,
        }
    }
}

function setError(error) {
    data.todolist.addNewTaskDialog.error = error;
    notifySubscriber();
}

function clearError(error) {
    data.todolist.addNewTaskDialog.error = null;
}

export function openAddTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = true;
    notifySubscriber();
}

export function closeAddTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = false;
    clearError();
    notifySubscriber();
}


let notifySubscriber = null;

export function subscribe(subscriber) {
    notifySubscriber = subscriber;
}

function createUniqId() {
    return Math.floor(Math.random() * 100000);
}

export function createTask(newTitle) {
    if (newTitle.trim().length > 0) {
        const newTask = {
            id: createUniqId(),
            title: newTitle,
        }
        data.todolist.tasks.push(newTask);
        notifySubscriber();
        return true;
    } else {
        setError('Empty input')
        notifySubscriber();
        return false;
    }
}

export function deleteTask(id) {
    data.todolist.tasks = data.todolist.tasks.filter((t) => t.id != id);
    notifySubscriber();

}