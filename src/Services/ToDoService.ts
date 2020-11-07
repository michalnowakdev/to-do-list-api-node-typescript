import ToDoItem from '../Models/ToDoItem';

export default class ToDoService {

    private items: ToDoItem[] = [];

    addToDoItem = (task: string, completed: boolean = false): ToDoItem => {
        const todoItem = new ToDoItem(task, completed);
        this.items.push(todoItem);
        return todoItem;
    }

    getToDoItems = (): ToDoItem[] => {
        return this.items;
    }
} 