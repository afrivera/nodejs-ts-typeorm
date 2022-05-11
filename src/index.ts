import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from './config/config';
import { DataSource } from 'typeorm';


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

        this.start();
    }

    async dbConnect():Promise<DataSource>{
        return await new DataSource(this.typeORMConfig).initialize();
    }

    public start(){
        this.app.listen( this.port, ()=> {
            console.log(`Server Listening on Port ${this.port}`);
        })
    }
} 

new Server();