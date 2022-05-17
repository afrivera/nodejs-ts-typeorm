import { BaseRouter } from "../config/baseRouter";
import { CategoryController } from '../controllers/category.controller';


export class CategoryRouter extends BaseRouter <CategoryController>{

    constructor(){
        super(CategoryController);
    }

    routes(): void {
        this.router.get('/', (req, res)=> this.controller.getCategories( req, res));
        this.router.get('/:id', (req, res)=> this.controller.getCategoryById( req, res));
        this.router.post('/', (req, res)=> this.controller.createCategory( req, res));
        this.router.put('/:id', (req, res)=> this.controller.updateCategory( req, res));
        this.router.delete('/:id', (req, res)=> this.controller.deleteCategory( req, res));
    }

}