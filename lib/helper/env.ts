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
    PORT: PORT || 5000,
    /**
        SendGrid API Key
        @use same account in all ENVs
     */
    SENDGRID_API_KEY,
    FROM_EMAIL: FROM_EMAIL || 'resumecvportfolio@gmail.com',
 }