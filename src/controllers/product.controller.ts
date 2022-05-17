import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';


export class ProductController {

    constructor( private readonly productService: ProductService = new ProductService()){}

    async getProducts( req: Request, res: Response ){
        try {
            const data = await this.productService.findAllProducts();
            res.json( data );
        } catch (error) {
            console.log(error);
        }
        
    }

    async getproductById( req: Request, res: Response ){
        try {
            const { id } = req.params;
            const data = await this.productService.findProductById( id );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }

    async createProduct( req: Request, res: Response ){
        try {
            const data = await this.productService.createProduct( req.body );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }

    async updateProduct( req: Request, res: Response ){
        try {
            const { id } = req.params;
            const data = await this.productService.updateProduct( id, req.body );
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct( req: Request, res: Response ){
        try {
            const { id } = req.params;
            const data = await this.productService.deleteProduct( id );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }
}