import { Application } from 'express';
import toDoController from './ToDoController';

const controllers = (app: Application) => {
    toDoController(app);
}

export default controllers;