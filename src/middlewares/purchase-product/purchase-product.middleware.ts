import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { PurchaseProductDTO } from '../../dto/purchase-product/purchase-product.dto';


export class PurchaseProductMiddleware {

    purchaseProductValid( req: Request, res: Response, next: NextFunction){

        const { quantityProduct, purchase, product} = req.body

        const valid = new PurchaseProductDTO();

        valid.quantityProduct = quantityProduct;
        valid.purchase = purchase;
        valid.product = product;

        validate( valid )
                .then( err => {
                    if( err.length > 0){
                        return res.status(400).json( err );
                    }else {
                        next();
                    }
                })
    }
}