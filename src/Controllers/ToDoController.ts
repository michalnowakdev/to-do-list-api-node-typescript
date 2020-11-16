import { Application, Request, Response, NextFunction } from 'express';
import CommonResponse from '../Models/Response';
import ToDoItem from '../Models/ToDoItem';
import ToDoService from '../Services/ToDoService';

const toDoService = new ToDoService();

const ToDoController = async (app: Application) => {
    app.get('/', async (_req: Request, res: Response, next: NextFunction) => {
        const items = await toDoService.getToDoItems();
        new CommonResponse(res, items).send();
        next();
    });

    app.post('/add', async (req: Request, res: Response, next: NextFunction) => {
        const { description, completed } = req.body;
        const addedItem = await toDoService.addToDoItem(description, completed);
        new CommonResponse(res, addedItem).send();
        next();
    });

    app.post('/update', async (req: Request, res: Response, next: NextFunction) => {
        const { id, description, completed } = req.body;
        const success = await toDoService.updateTask(id, description, completed);
        new CommonResponse(res, {}, success).send();
        next();
    });

    app.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const success = await toDoService.deleteOne(id);
        new CommonResponse(res, {}, success).send();
        next();
    });

    app.delete('/all', async (req: Request, res: Response, next: NextFunction) => {
        const success = await toDoService.deleteAll();
        new CommonResponse(res, {}, success).send();
        next();
    });
}

export default ToDoController;