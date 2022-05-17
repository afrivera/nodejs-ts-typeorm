import { BaseRouter } from '../config/baseRouter';
import { PurchaseController } from '../controllers/purchase.controller';


export class PurchaseRouter extends BaseRouter <PurchaseController> {

    constructor(){
        super( PurchaseController );
    }

    routes(): void {
        this.router.get('/', ( req, res)=> 
            this.controller.getPurchases( req, res )
        );

        this.router.get('/:id', ( req, res)=> 
            this.controller.getPurchaseById( req, res )
        );

        this.router.post('/', ( req, res)=> 
            this.controller.createPurchases( req, res )
        );

        this.router.put('/:id', ( req, res)=> 
            this.controller.updatePurchase( req, res )
        );

        this.router.delete('/:id', ( req, res)=> 
            this.controller.deletePurchase( req, res )
        );
    }
}