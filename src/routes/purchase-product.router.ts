import { BaseRouter } from '../config/baseRouter';
import { PurchaseProductController } from '../controllers/purchase-product.controller';


export class PurchaseProductsRouter extends BaseRouter <PurchaseProductController> {

    constructor(){
        super( PurchaseProductController );
    }

    routes(): void {
        this.router.get('/', (req, res)=> 
            this.controller.getPurchaseProducts( req, res )
        );

        this.router.get('/:id', (req, res)=> 
            this.controller.getPurchaseProducts( req, res )
        );

        this.router.post('/', (req, res)=> 
            this.controller.createPurchaseProduct( req, res )
        );

        this.router.put('/:id', (req, res)=> 
            this.controller.updatePurchaseProduct( req, res )
        );

        this.router.delete('/:id', (req, res)=> 
            this.controller.deletePurchaseProduct( req, res )
        );
    }
}