import express from 'express';
import { getAllUsers, addUser } from '../controllers/users.js';
import { auth } from '../utils/auth.js';

const router = express.Router();

router.get('/', auth(), getAllUsers);

router.post('/', addUser);

export default router;