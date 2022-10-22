import express from 'express';
import usersRouter from './users.js';

const router = express.Router();

router.use('/users', usersRouter);
// router.use('/items', itemsRouter);


export default router;