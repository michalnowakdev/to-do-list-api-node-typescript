import { Application } from "express";
import bodyParser from 'body-parser';
import compression from 'compression';


const config = (app: Application) => {
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use((req, res, next) => {

        // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        const allowOrigin = process.env.ALLOW_ORIGIN || "*";

        res.setHeader('Access-Control-Allow-Origin', allowOrigin);

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        // res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });
}

export default config;