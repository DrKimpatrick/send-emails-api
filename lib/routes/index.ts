import express, { Request, Response } from 'express';
import SendMailController from '../controller';
import ValidateSendMail from '../helper/validateSendMails';

const router = express.Router();
/**
    Default route
 */
router.route('/').get((req: Request, res: Response) => {
    return res.json({
        status: 1,
        message: "Welcome to the send-email api",
    })
});

/**
    Receive mails from site visitors
    @param {
        email
    }
 */
router.route('/send').post(ValidateSendMail.sendEmail, SendMailController.sendEmail);

export default router;