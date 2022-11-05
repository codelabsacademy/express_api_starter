import express from 'express';
import { getAllUsers, addUser } from '../controllers/users.js';
import { auth } from '../utils/auth.js';
import { role } from '../utils/role.js';
import { UserRoles } from '../models/User.js';

const router = express.Router();

router.get('/', auth(), role(UserRoles.CONTENT_MANAGER), getAllUsers);

router.post('/', addUser);

export default router;