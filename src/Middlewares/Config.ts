import { Application } from "express";
import bodyParser from 'body-parser';
import compression from 'compression';


const config = (app: Application) => {
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
}

export default config;