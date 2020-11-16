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
        return items.length ? items.map(({ description, id, completed }) => new ToDoItem(description, completed, id)) : [];
    }

    updateTask = async (id: string, description: string, completed: boolean): Promise<boolean> => {
        const task = new ToDoItem(description, completed, id);
        const db: Db = getDb();
        const resp = await db.collection(collectionName).findOneAndUpdate(
            { "id": task.id },
            { $set: { "completed": task.completed } }
        );
        return !!resp.value;
    }

    deleteOne = async (id: string): Promise<boolean> => {
        const db: Db = getDb();
        const query = { id };
        const resp = await db.collection(collectionName).deleteOne(query);
        return !!resp?.deletedCount;
    }

    deleteAll = async (): Promise<boolean> => {
        const db: Db = getDb();
        const query = {};
        const resp = await db.collection(collectionName).deleteMany(query);
        return !!resp?.deletedCount;
    }
} 