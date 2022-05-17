import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';


export class CategoryController {
    constructor( private readonly categoryService: CategoryService = new CategoryService()){}

    async getCategories( req: Request, res: Response){
        try {
            const data = await this.categoryService.findAllCategories();
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async getCategoryById( req: Request, res: Response){
        try {
            const { id } = req.params;
            const data = await this.categoryService.findCategoryById( id );
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async createCategory( req: Request, res: Response ){
        try {
            const data = await this.categoryService.createCategory( req.body);
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async updateCategory( req: Request, res: Response ){
        try {
            const { id } = req.params;
            const data = await this.categoryService.updateCategory( id, req.body);
            res.json(data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCategory (req: Request, res: Response){
        try {
            const { id } = req.params;
            const data = await this.categoryService.deleteCategory( id );
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }
}