import service from '../services/users.js';
import {storage} from '../utils/firebase.js';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await service.findAllUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

export const addUser = async (req, res, next) => {
    try {
        const { username, email } = req.body;
        if (!username) {
            throw new Error("username is missing");
        }
        if (!email) {
            throw new Error("email is missing");
        }

        const newUser = await service.createUser(username, email);

        res.status(201).json(newUser);

    } catch (err) {
        next(err);
    }
}

export const uploadUserFile = async (req, res, next) => {
    try {

        // create a storage reference
        const storageRef = ref(storage, `/files/${new Date().getTime().toString() + req.file.originalname}`);

        //create the upload task
        const uploadTask = uploadBytesResumable(storageRef, req.file.buffer);

        // keep track of the upload task progress
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                console.log('file uploading...');
            },
            (error) => {
                console.log(error);
            },
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                // store the url inside the user object
                res.status(200).json({url});
            }
        )
    } catch(err){
        next(err);
    }
}
