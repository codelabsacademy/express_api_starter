import { UserModel } from '../models/User.js';



const findUserWithEmail = async (email) => {
    const user = await UserModel.findOne({ email: email });
    return user;
};

const createUser = async (user) => {

    const newlyCreatedUser = await UserModel.create(user);

    return newlyCreatedUser;
}

const findUserById = async (userId) => {
    const user = await UserModel.findById(userId);
    return user;
}

const validateUser = async (userId) => {
    return await UserModel.findByIdAndUpdate(userId, {
        emailVerified: true,
    }, { new: true });
}

export default {
    findUserWithEmail,
    createUser,
    findUserById,
    validateUser
}