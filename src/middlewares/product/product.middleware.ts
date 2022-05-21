import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { ProductDTO } from '../../dto/products/product.dto';


export class ProductMiddleware {
    productValidator( req: Request, res: Response, next: NextFunction){

        const { productName, description, price, category } = req.body;

        const valid = new ProductDTO();

        valid.productName = productName;
        valid.description = description;
        valid.price = price;
        valid.category = category;

        validate( valid )
                .then( err => {
                    if( err.length > 0 ){
                        return res.status(400).json( err );
                    } else {
                        next();
                    }
                })
    }
}