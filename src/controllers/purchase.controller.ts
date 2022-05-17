import { Request, Response } from 'express';
import { PurchaseService } from '../services/purchase.service';


export class PurchaseController {
    
    constructor( private readonly purchaseService: PurchaseService = new PurchaseService()){}

    async getPurchases( req: Request, res: Response){
        try {
            const data = await this.purchaseService.findAllPurchases();
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async getPurchaseById( req: Request, res: Response){
        try {
            const { id } = req.params;
            const data = await this.purchaseService.findPurchaseById( id );
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async createPurchases( req: Request, res: Response){
        try {
            const data = await this.purchaseService.createPurchase( req.body);
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async updatePurchase( req: Request, res: Response){
        try {
            const { id } = req.params;
            const data = await this.purchaseService.updatePurchase(id, req.body);
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async deletePurchase( req: Request, res: Response){
        try {
            const { id } = req.params;
            const data = await this.purchaseService.deletePurchase( id );
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

}