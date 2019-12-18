import { Response, Request } from 'express';
import Email from '../helper/sendEmail';

class SendMails {
    public sendEmail  = async (req: Request, res: Response) => {
        const {toEmail,fromEmail, subject, body, name} = req.body;
        try {
            await Email.newUserEmail(toEmail, subject, body, name, fromEmail);
        }catch {
            return res.status(400).json({
                status: 400,
                code: 0,
                error: 'Unable to send email, please try again',
            });
        }
        return res.status(200).json({
            status: 200,
            code: 1,
            error: 'successfully sent email',
        });
    }

}

export default new SendMails()