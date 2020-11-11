import express from 'express';

import Controllers from './Controllers';
import Middlewares from './Middlewares';
import { mongoConnect } from './Database/Database';

const port = process.env.PORT;
const app: express.Application = express();

Middlewares(app);
Controllers(app);

mongoConnect(() => {
    app.listen(port, () => console.log("Server running"));
});