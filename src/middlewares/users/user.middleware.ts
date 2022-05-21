import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { UserDTO } from "../../dto/users/user.dto";


export class UserMiddleware {

    userValidator(req: Request, res: Response, next: NextFunction){

        const { name, lastname, username, email, password, city, province, role, } = req.body;

        const valid = new UserDTO();

        valid.name = name;
        valid.lastname = lastname;
        valid.username = username;
        valid.email = email;
        valid.password = password;
        valid.city = city;
        valid.province = province;
        valid.role = role;

        validate( valid )
                .then( (err)=> {
                    if( err.length > 0){
                        return res.status(400).json( err );
                    } else {
                        next();
                    }
                })

    }
}