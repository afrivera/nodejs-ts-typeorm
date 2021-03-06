import express, { urlencoded, Request, Response, NextFunction,  Errback } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from './config/config';
import { UserRouter } from './routes/user.router';
import { CategoryRouter } from './routes/category.router';
import { ProductRouter } from './routes/product.router';
import { CustomerRouter } from './routes/customer.router';
import { PurchaseRouter } from './routes/purchase.router';
import { PurchaseProductsRouter } from './routes/purchase-product.router';
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

        // routes
        this.app.use('/api', this.routes());
        this.start();
    }

    routes(): Array<express.Router> {
        return [
            new UserRouter().router,
            new CategoryRouter().router,
            new ProductRouter().router,
            new CustomerRouter().router,
            new PurchaseRouter().router,
            new PurchaseProductsRouter().router
        ]
    }

    async dbConnect():Promise<DataSource | void> {
        return this.initConnect
                    .then(()=> console.log('Connect Success'))
                    .catch( err => console.log(err));
    }

    public start(){
        this.app.listen( this.port, ()=> {
            console.log(`Server Listening on Port ${this.port}`);
        })
    }
} 

new Server();