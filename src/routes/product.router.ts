import { BaseRouter } from "../config/baseRouter";
import { ProductController } from "../controllers/product.controller";
import { ProductMiddleware } from '../middlewares/product/product.middleware';


export class ProductRouter extends BaseRouter <ProductController, ProductMiddleware>{

    constructor(){
        super( ProductController, ProductMiddleware );
    }

    routes(): void {
        this.router.get('/products', (req, res )=> this.controller.getProducts( req, res ));

        this.router.get('/products/:id', (req, res)=> 
            this.controller.getproductById( req, res)
        );

        this.router.post('/products', (req, res, next)=> [ this.middleware.productValidator( req, res, next )], (req, res)=> 
            this.controller.createProduct( req, res )
        );

        this.router.put( '/products/:id', (req, res )=> 
            this.controller.updateProduct( req, res )
        );

        this.router.delete('/products/:id', (req, res )=> 
            this.controller.deleteProduct( req, res )
        );

    }
}