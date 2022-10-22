import express from 'express';
import mainRouter from './routers/index.js';

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;


app.use(mainRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});