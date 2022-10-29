import { UserModel } from '../models/User.js';



const findAllUsers = async () => {
    const users = await UserModel.find().select({ _id: 0, email: 1, username: 1 });
    return users;
};

const createUser = async (username, email) => {

    const newUser = {
        username: username,
        email: email
    };

    const newlyCreatedUser = await UserModel.create(newUser).select({ _id: 0, email: 1, username: 1 });

    return newlyCreatedUser;
}


export default {
    findAllUsers,
    createUser
}