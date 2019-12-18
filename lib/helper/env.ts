import dotenv from 'dotenv';
dotenv.config();

const { 
    PORT, /**
    SendGrid API Key
    @use same account in all ENVs
 */
    SENDGRID_API_KEY,
    FROM_EMAIL,  } = process.env;


export default { 
    PORT: PORT || 3000,
    /**
        SendGrid API Key
        @use same account in all ENVs
     */
    SENDGRID_API_KEY: SENDGRID_API_KEY || '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',
    FROM_EMAIL: FROM_EMAIL || 'resumecvportfolio@gmail.com',
 }