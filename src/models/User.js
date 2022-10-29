import mongoose from 'mongoose';
const document_name = 'User';
const collection_name = 'users';

const userSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    }
});

export const UserModel = mongoose.model(document_name, userSchema, collection_name);

