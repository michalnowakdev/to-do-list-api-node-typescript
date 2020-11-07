import { Application } from "express";
import bodyParser from 'body-parser';


const config = (app: Application) => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
}

export default config;