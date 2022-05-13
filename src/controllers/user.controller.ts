import { Request, Response } from "express";
import { UserService } from "../services/user.service";


export class UserController {
    constructor( private readonly userService: UserService = new UserService()){}

    async getUsers( req: Request, res: Response){
        try {
            const data = await this.userService.findAllUsers();
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
}