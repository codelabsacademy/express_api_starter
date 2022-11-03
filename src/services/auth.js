import { UserModel } from '../models/User.js';



const findUserWithEmail = async (email) => {
    const user = await UserModel.findOne({ email: email });
    return user;
};

const createUser = async (user) => {

    const newlyCreatedUser = await UserModel.create(user);

    return newlyCreatedUser;
}


export default {
    findUserWithEmail,
    createUser,
}