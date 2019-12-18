/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express';
const Joi = require('@hapi/joi');
import Commons from './raiseError';

// Calculate service prices
class Validate extends Commons {
    public sendEmail = async (req: Request, res: Response, next: NextFunction) => {
        const schema = Joi.object().keys({
            body: Joi.string()
                .required()
                .label('Body is required'),
            name: Joi.string()
                .required()
                .label('Body is required'),
            subject: Joi.string()
                .required()
                .label('Body is required'),
            toEmail: Joi.string()
                .email()
                .required()
                .label('Please enter a valid email')
                .trim(),
            fromEmail: Joi.string()
                .email()
                .label('Please enter a valid email')
                .trim(),
        });

        const { error } = Joi.validate(req.body, schema, { abortEarly: false });

        await this.raiseError(error, res, next);
    };

}

export default new Validate();
