import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from './config/config';
import { UserRouter } from './routes/user.router';


class Server extends ConfigServer {
    public app: express.Application = express();
    public port: number = this.getNumberEnv('PORT');

    constructor(){
        super();
        this.app.use(express.json());
        this.app.use(urlencoded( {extended: true }));


        this.dbConnect();

        this.app.use(morgan('tiny'));
        this.app.use(cors());

        // routes
        this.app.use('/api/users', this.routes());
        this.start();
    }

    routes(): Array<express.Router> {
        return [
            new UserRouter().router
        ]
    }

    public start(){
        this.app.listen( this.port, ()=> {
            console.log(`Server Listening on Port ${this.port}`);
        })
    }
} 

new Server();