import express from 'express';
import { getAllUsers, addUser, uploadUserFile } from '../controllers/users.js';
import { auth } from '../utils/auth.js';
import { role } from '../utils/role.js';
import { UserRoles } from '../models/User.js';
import multer from 'multer';


const multerStorage = multer.memoryStorage();

const upload = multer({storage: multerStorage});

const router = express.Router();

router.get('/', auth(), role(UserRoles.CONTENT_MANAGER), getAllUsers);

router.post('/upload', upload.single('file'), uploadUserFile);

router.post('/', addUser);

export default router;