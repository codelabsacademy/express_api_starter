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
        const username = req.body.username;
        const email = req.body.email;
        if (!username) {
            res.status(400).json({ message: "username is missing" });
        }
        if (!email) {
            res.status(400).json({ message: "email is missing" });
        }

        const newUser = service.createUser(username, email);

        res.status(201).json(newUser);

    } catch (err) {
        next(err);
    }
}

