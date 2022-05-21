import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { CategoryDTO } from '../../dto/categories/category.dto';


export class CategoryMiddleware {

    categoryValidator( req: Request, res: Response, next: NextFunction){
        const { categoryName } = req.body;

        const valid = new CategoryDTO();

        valid.categoryName = categoryName;

        validate( valid )
                .then(err=> {
                    if( err.length > 0){
                        return res.status(400).json( err );
                    } else {
                        next();
                    }
                })
    }
}