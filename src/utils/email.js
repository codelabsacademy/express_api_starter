import sendgrid from '@sendgrid/mail';
import { sendgrid_api_key } from './config.js';

sendgrid.setApiKey(sendgrid_api_key);

export const sendEmail = async (msg) => {
    try {
        await sendgrid.send(msg);
    } catch (err) {
        throw new Error(err.message);
    }
}



