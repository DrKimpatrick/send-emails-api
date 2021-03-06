/* eslint-disable @typescript-eslint/no-var-requires */
const SGmail = require('@sendgrid/mail');
import env from '../helper/env';

class Email {
    public newUserEmail = (toEmail: string, subject: string, body: string, name: string, fromEmail: any) => {
        return new Promise((resolve, reject) => {
            SGmail.setApiKey(env.SENDGRID_API_KEY);

            const msg = {
                to: toEmail,
                from: env.FROM_EMAIL,
                subject,
                html: `
                    <h3>${name}</h3>
                    <h5>${fromEmail}</h5>
                    <p>${body}</p>
                    `,
            };

            SGmail.send(msg)
                .then((sent: any) => {  //sent.statusMessage, sent.statusCode
                    console.log(sent, '---sent-msg---');
                    resolve(sent);
                })
                .catch((err: any) => {
                    console.log(err, '--err--msg--');
                    reject(err);
                });
        });
    };
}

export default new Email();
