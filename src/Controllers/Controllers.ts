import { Application, Request, Response, NextFunction } from 'express';
import toDoController from './ToDoController';

const controllers = (app: Application) => {
    toDoController(app);
}

export default controllers;