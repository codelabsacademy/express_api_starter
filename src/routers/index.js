import express from 'express';
import usersRouter from './users.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/auth', authRouter);
// router.use('/items', itemsRouter);


export default router;