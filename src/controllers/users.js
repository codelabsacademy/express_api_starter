import service from '../services/users.js';

export const getAllUsers = (req, res, next) => {
    try {
        const users = service.findAllUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

export const addUser = (req, res, next) => {
    try {
        const { username, email } = req.body;
        if (!username) {
            throw new Error("username is missing");
        }
        if (!email) {
            throw new Error("email is missing");
        }

        const newUser = service.createUser(username, email);

        res.status(201).json(newUser);

    } catch (err) {
        next(err);
    }
}

