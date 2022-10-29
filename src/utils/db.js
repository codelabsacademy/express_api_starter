import mongoose from 'mongoose';
import {
    db_username,
    db_password,
    db_cluster,
} from './config.js';

let dbURI = `mongodb+srv://${db_username}:${db_password}${db_cluster}/?retryWrites=true&w=majority`;

const promise = mongoose.connect(dbURI);

promise
    .then(() => {
        console.log("Connection to Database successful");
    }).catch(err => {
        console.error("Connection failed");
        console.error(err);
    });

mongoose.connection.on('connected', () => {
    console.log("Mongoose connected to database");
});

mongoose.connection.on('error', (err) => {
    console.log("Mongoose connection error");
    console.error(err);
});

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose disconncted from database");
});

process.on('SIGNIT', () => {
    console.log("Application stopped");
    mongoose.connection.close(() => {
        console.log("connection closed");
    });
    process.exit(0);
});



export default dbURI;



