import sendgrid from '@sendgrid/mail';
import { sendgrid_api_key } from './config.js';



sendgrid.setApiKey(sendgrid_api_key);

// let msg;

// msg = {
//     to: 'zzidane@codelabsacademy.com', // Change to your recipient
//     from: 'zzidane@codelabsacademy.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }


export const sendEmail = async (msg) => {
    try {
        await sendgrid.send(msg);
    } catch (err) {
        throw new Error(err.message);
    }
}



