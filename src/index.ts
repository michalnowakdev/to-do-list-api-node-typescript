import express from 'express';

import Controllers from './Controllers/Controllers';
import Middlewares from './Middlewares';

const port: number = 5000 || process.env.PORT;
const app: express.Application = express();

Middlewares(app);
Controllers(app);

app.listen(port, () => console.log("Server running"));

