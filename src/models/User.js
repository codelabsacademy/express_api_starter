import mongoose from 'mongoose';
const document_name = 'User';
const collection_name = 'users';

export const UserRoles = {
    ADMIN: 'ADMIN',
    CONTENT_MANAGER: 'CONTENT_MANAGER',
    USER: 'USER',
}


const userSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    role: {
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 2,
    },
    validationCode: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    emailVerified: {
        type: mongoose.Schema.Types.Boolean,
        required: true,
        default: false,
    }

});

export const UserModel = mongoose.model(document_name, userSchema, collection_name);

