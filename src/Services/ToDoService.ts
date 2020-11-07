import ToDoItem from '../Models/ToDoItem';
import { getDb } from '../Database/Database';
import { Db } from 'mongodb';

const collectionName: string = 'tasks';

export default class ToDoService {

    addToDoItem = (task: string, completed: boolean = false): ToDoItem => {
        const todoItem = new ToDoItem(task, completed);
        const db: Db = getDb();
        db.collection(collectionName)
            .insertOne(todoItem);
        return todoItem;
    }

    getToDoItems = async (): Promise<ToDoItem[]> => {
        const db: Db = getDb();
        const items = await db.collection(collectionName).find().toArray();
        debugger;

        return items.length ? items.map(({ description, _id, completed }) => new ToDoItem(description, completed, _id)) : [];
    }
} 