import { Application, Request, Response, NextFunction } from 'express';
import ToDoItem from '../Models/ToDoItem';
import ToDoService from '../Services/ToDoService';

const toDoService = new ToDoService();

const ToDoController = (app: Application) => {
    app.get('/', (_req: Request, res: Response, next: NextFunction) => {
        debugger;
        res.send(JSON.stringify(toDoService.getToDoItems()));
        next();
    });

    app.post('/add', (req: Request, res: Response, next: NextFunction) => {
        debugger;
        const { task, completed } = req.body;
        debugger;
        const item: ToDoItem = toDoService.addToDoItem(task, completed);
        res.send(JSON.stringify(item));
        next();
    });
}

export default ToDoController;