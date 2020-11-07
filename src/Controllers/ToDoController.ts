import { Application, Request, Response, NextFunction } from 'express';
import ToDoItem from '../Models/ToDoItem';
import ToDoService from '../Services/ToDoService';

const toDoService = new ToDoService();

const ToDoController = async (app: Application) => {
    app.get('/', async (req: Request, res: Response, next: NextFunction) => {
        const items = await toDoService.getToDoItems();
        res.send(JSON.stringify(items));
        next();
    });

    app.post('/add', (req: Request, res: Response, next: NextFunction) => {
        const { task, completed } = req.body;
        const item: ToDoItem = toDoService.addToDoItem(task, completed);
        res.send(JSON.stringify(item));
        next();
    });
}

export default ToDoController;