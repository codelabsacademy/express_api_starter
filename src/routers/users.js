import express from 'express';
import { getAllUsers, addUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', addUser);

export default router;