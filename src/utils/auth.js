import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwt_token } from './config.js';

export const createPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export const validatePassword = (inputPassword, hashedPassword) => {
    return bcrypt.compare(inputPassword, hashedPassword);
}

export const createToken = (user) => {
    const token = jwt.sign({ id: user._id, role: user.role }, jwt_token, {
        expiresIn: '10d'
    });
    return token;
}

export const auth = () => (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) throw new Error('Access denied');
        if (!authorization.startsWith('Bearer ')) throw new Error('Invalid authorization');
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, jwt_token);
        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (err) {
        if (err.name == 'JsonWebTokenError') {
            if (err.message == 'jwt expired') {
                next(new Error('token is expired, login again'));
            } else next(new Error('token is invalid'));
        } else next(err)
    }
}


