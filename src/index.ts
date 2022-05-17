import express, { urlencoded, Request, Response, NextFunction,  Errback } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from './config/config';
import { UserRouter } from './routes/user.router';
import { CategoryRouter } from './routes/category.router';
import { ProductRouter } from './routes/product.router';
import { CustomerRouter } from './routes/customer.router';


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
        this.app.use('/api/categories', this.routes());
        this.app.use('/api/products', this.routes());
        this.app.use('/api/customers', this.routes());
        this.start();
    }

    routes(): Array<express.Router> {
        return [
            new UserRouter().router,
            new CategoryRouter().router,
            new ProductRouter().router,
            new CustomerRouter().router,
        ]
    }

    public start(){
        this.app.listen( this.port, ()=> {
            console.log(`Server Listening on Port ${this.port}`);
        })
    }
} 

new Server();