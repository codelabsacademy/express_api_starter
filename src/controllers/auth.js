import service from '../services/auth.js';
import { createPassword, validatePassword, createToken } from '../utils/auth.js';


export const handleSignUp = async (req, res, next) => {
    try {
        const user = await service.findUserWithEmail(req.body.email);

        if (user) throw new Error('User already registered');

        const hashedPassword = await createPassword(req.body.password);

        const newUser = {
            email: req.body.email,
            password: hashedPassword,
        };

        await service.createUser(newUser);

        res.status(201).json({
            message: "User registered successfully",
            status: true
        });

    } catch (err) {
        next(err);
    }
}

export const handleLogin = async (req, res, next) => {
    try {
        const user = await service.findUserWithEmail(req.body.email);

        if (!user) throw new Error("Invalid credentials");

        const matched = await validatePassword(req.body.password, user.password);

        if (!matched) throw new Error("Invalid credentials");

        const token = createToken(user);

        res.status(200).json({ token, user: user });

    } catch (err) {
        next(err);
    }
}
