import { Application } from "express";
import ConfigMiddleware from './Config';

const Middleware = (app: Application) => {
    ConfigMiddleware(app);
}

export default Middleware;