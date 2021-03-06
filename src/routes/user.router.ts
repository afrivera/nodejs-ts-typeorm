import { BaseRouter } from "../config/baseRouter";
import { UserController } from "../controllers/user.controller";
import { UserMiddleware } from '../middlewares/users/user.middleware';


export class UserRouter extends BaseRouter <UserController, UserMiddleware> {
    constructor(){
        super(UserController, UserMiddleware);
    }

    routes(): void {
        this.router.get('/users', (req, res)=> this.controller.getUsers( req, res));
        this.router.get('/users/:id', (req, res)=> this.controller.getUserById( req, res));
        this.router.get('/users/relation/:id', (req, res)=> this.controller.getUserWithRelation( req, res));
        this.router.post('/users', (req, res, next)=> [this.middleware.userValidator(req, res, next)],(req, res)=> this.controller.createUser( req, res));
        this.router.put('/users/:id', (req, res)=> this.controller.updateUser( req, res));
        this.router.delete('/users/:id', (req, res)=> this.controller.deleteUser( req, res));
    }
}