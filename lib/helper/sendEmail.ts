/* eslint-disable @typescript-eslint/no-var-requires */
const SGmail = require('@sendgrid/mail');
import env from '../helper/env';
const nodemailer = require('nodemailer');

class Email {
    // sendgrid
    // public newUserEmailx = (toEmail: string, subject: string, body: string, name: string, fromEmail: any) => {
    //     return new Promise((resolve, reject) => {
    //         SGmail.setApiKey(env.SENDGRID_API_KEY);

    //         const msg = {
    //             to: toEmail,
    //             from: env.FROM_EMAIL,
    //             subject,
    //             html: `
    //                 <h3>${name}</h3>
    //                 <h5>${fromEmail}</h5>
    //                 <p>${body}</p>
    //                 `,
    //         };

    //         SGmail.send(msg)
    //             .then((sent: any) => {
    //                 //sent.statusMessage, sent.statusCode
    //                 console.log(sent, '---sent-msg---');
    //                 resolve(sent);
    //             })
    //             .catch((err: any) => {
    //                 console.log(err, '--err--msg--');
    //                 reject(err);
    //             });
    //     });
    // };

    // Node mailer
    public newUserEmail = async (toEmail: string, subject: string, body: string, name: string, fromEmail: any) => {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            to: toEmail,
            from: env.FROM_EMAIL,
            subject,
            html: `
                    <h3>${name}</h3>
                    <h5>${fromEmail}</h5>
                    <p>${body}</p>
                    `,
        };

        return transporter.sendMail(mailOptions);
    };
}

export default new Email();
