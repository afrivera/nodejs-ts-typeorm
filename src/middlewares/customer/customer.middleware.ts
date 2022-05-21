import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express"
import { CustomerDTO } from '../../dto/customers/customer.dto';


export class CustomerMiddleware {
    customerValidator ( req: Request, res: Response, next: NextFunction){
        const { address, dni, user } = req.body;

        const valid = new CustomerDTO();

        valid.address = address;
        valid.dni = dni;
        valid.user = user;

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