import express from 'express';
import { handleSignUp, handleLogin, handleEmailVerification } from '../controllers/auth.js';
import { auth } from '../utils/auth.js';

const router = express.Router();

router.post('/signup', handleSignUp);
router.post('/login', handleLogin);
router.post('/verify', auth(), handleEmailVerification);

export default router;