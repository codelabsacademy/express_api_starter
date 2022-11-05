import service from '../services/auth.js';
import { createPassword, validatePassword, createToken } from '../utils/auth.js';
import { createValidationCode } from '../utils/vlidationCode.js';
import { sendEmail } from '../utils/email.js';
import { sender_email } from '../utils/config.js';


export const handleSignUp = async (req, res, next) => {
    try {
        const user = await service.findUserWithEmail(req.body.email);

        if (user) throw new Error('User already registered');

        const hashedPassword = await createPassword(req.body.password);

        const validationCode = createValidationCode();

        const newUser = {
            email: req.body.email,
            password: hashedPassword,
            validationCode: validationCode,
            emailVerified: false,
        };

        // send email verification

        const msg = {
            to: req.body.email, // Change to your recipient
            from: sender_email, // Change to your verified sender
            subject: 'Email Verfication',
            text: `Your email verfication code: ${validationCode}`,
            html: `<strong>Your email verfication code: ${validationCode}</strong>`,
        }


        await sendEmail(msg);

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


export const handleEmailVerification = async (req, res, next) => {
    try {
        const user = await service.findUserById(req.userId);
        if (user.validationCode && user.validationCode == req.body.validationCode) {
            await service.validateUser(req.userId);
            res.status(200).json({ message: "Email verified" });
        } else {
            res.status(400).json({ message: "Invalid code" });
        }

    } catch (err) {
        next(err);
    }
}
