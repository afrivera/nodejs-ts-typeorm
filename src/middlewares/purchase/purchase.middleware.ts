import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { PurchaseDTO } from '../../dto/purchases/purchase.dto';


export class PurchaseMiddleware {

    purchaseValid( req:Request, res: Response, next: NextFunction){

        const { status, paymentMethod, customer} = req.body;

        const valid = new PurchaseDTO();

        valid.status = status;
        valid.paymentMethod = paymentMethod;
        valid.customer = customer;

        validate( valid )
                .then( err => {
                    if( err.length > 0 ){
                        return res.status(400).json( err );
                    } else{
                        next();
                    }
                })
    }
}