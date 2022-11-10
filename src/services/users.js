import { UserModel } from '../models/User.js';

const findAllUsers = async () => {
    const users = await UserModel.find().select({ password: 0 });
    return users;
};

const createUser = async (username, email) => {
    const newUser = {
        username: username,
        email: email
    };
    return newUser;
}


export default {
    findAllUsers,
    createUser
}