import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';


class Server {
    public app: express.Application = express();
    public port: number = 5000;

    constructor(){
        this.app.use(express.json());
        this.app.use(urlencoded( {extended: true }));


        this.app.use(morgan('dev'));
        this.app.use(cors());

        this.start();
    }

    public start(){
        this.app.listen( this.port, ()=> {
            console.log(`Server Listening on Port ${this.port}`);
        })
    }
} 

new Server();