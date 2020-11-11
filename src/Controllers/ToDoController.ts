import { Application, Request, Response, NextFunction } from 'express';
import ToDoItem from '../Models/ToDoItem';
import ToDoService from '../Services/ToDoService';

const toDoService = new ToDoService();

const ToDoController = async (app: Application) => {
    app.get('/', async (req: Request, res: Response, next: NextFunction) => {
        const items = await toDoService.getToDoItems();
        res.send(items);
        next();
    });

    app.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        const { description, completed } = req.body;
        await toDoService.addToDoItem(description, completed);
        res.status(200).send('OK');
        next();
    });

    app.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        const { id, description, completed } = req.body;
        await toDoService.updateTask(id, description, completed);
        res.status(200).send('OK');
        next();
    });

    app.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        await toDoService.deleteOne(id);
        res.status(200).send('OK');
        next();
    });

    app.delete('/all', async (req: Request, res: Response, next: NextFunction) => {
        await toDoService.deleteAll();
        res.status(200).send('OK');
        next();
    });
}

export default ToDoController;