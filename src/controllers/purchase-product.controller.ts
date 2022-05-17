import { Request, Response } from 'express';
import { PurchaseProductService } from '../services/purchase-product.service';


export class PurchaseProductController {

    constructor( private readonly purchaseProductoService: PurchaseProductService = new PurchaseProductService()){}

    async getPurchaseProducts( req: Request, res: Response ){
        try {
            const data = await this.purchaseProductoService.findAllPurchaseProducts();
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }

    async getPurchaseProductoById( req: Request, res: Response){
        try {
            const { id } = req.params;
            const data = await this.purchaseProductoService.findPurchaseProductsById( id );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }

    async createPurchaseProduct( req: Request, res: Response){
        try {
            const data = await this.purchaseProductoService.createPurchaseProduct( req.body );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }

    async updatePurchaseProduct( req: Request, res: Response){
        try {
            const { id } = req.params;
            const data = await this.purchaseProductoService.updatePurchaseProducts( id, req.body );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }

    async deletePurchaseProduct( req: Request, res: Response){
        try {
            const { id } = req.params;
            const data = await this.purchaseProductoService.deletePurchaseProducts( id );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }
}