import express from 'express';
import mainRouter from './routers/index.js';
import errorHandler from './utils/error.js';
import { port } from './utils/config.js';
import './utils/db.js';

const app = express();

app.use(express.json());

const serverPort = port || 5000;
app.use(mainRouter);


app.use(errorHandler);

app.listen(serverPort, () => {
    console.log(`Server listening on port ${serverPort}`);
});