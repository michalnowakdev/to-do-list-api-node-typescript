import ToDoItem from '../Models/ToDoItem';
import { getDb } from '../Database/Database';
import { Db } from 'mongodb';

const collectionName: string = 'tasks';

export default class ToDoService {

    addToDoItem = (description: string, completed: boolean = false): ToDoItem => {
        const id = new Date().getTime().toString();
        const todoItem = new ToDoItem(description, completed, id);
        const db: Db = getDb();
        db.collection(collectionName)
            .insertOne(todoItem);
        return todoItem;
    }

    getToDoItems = async (): Promise<ToDoItem[]> => {
        const db: Db = getDb();
        const items = await db.collection(collectionName).find().toArray();
        debugger;

        return items.length ? items.map(({ description, id, completed }) => new ToDoItem(description, completed, id)) : [];
    }

    updateTask = async (id: string, description: string, completed: boolean): Promise<ToDoItem> => {
        const task = new ToDoItem(description, completed, id);
        const db: Db = getDb();
        const resp = await db.collection(collectionName).findOneAndUpdate(
            { "id": task.id },
            { $set: { "completed": task.completed } }
        );

        console.log(resp);
        return task;
    }

    deleteOne = async (id: string): Promise<string> => {
        const db: Db = getDb();
        const query = { id };
        const resp = await db.collection(collectionName).deleteOne(query);
        return "OK";
    }

    deleteAll = async (): Promise<string> => {
        const db: Db = getDb();
        const query = {};
        const resp = await db.collection(collectionName).deleteMany(query);
        return "OK";
    }
} 