import express from 'express';
import Routers from './routes';
import cors from 'cors';
class App {
    public app: express.Application = express();

    public constructor(){
        this.app.use(cors());
        this.config();
        this.configureRoutes();
    }

    private config = (): void => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private configureRoutes  = () => {
        this.app.use('/', Routers);
    }
}

export default new App();