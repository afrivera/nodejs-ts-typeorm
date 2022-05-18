import { BaseService } from '../config/baseService';
import { ProductDTO } from '../dto/products/product.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductEntity } from '../entities/products/product.entity';


export class ProductService extends BaseService<ProductEntity> {

    constructor(){
        super( ProductEntity);
    }

    async findAllProducts(): Promise<ProductEntity []> {
        return ( await this.execRepository).find();
    }

    async findProductById( id: string): Promise < ProductEntity | null > {
        return ( await this.execRepository).findOneBy( { id } );
    }

    async createProduct( product:ProductDTO ): Promise <ProductEntity> {
        return ( await this.execRepository).save( product );
    }

    async deleteProduct( id: string): Promise <DeleteResult> {
        return ( await this.execRepository).delete({ id });
    }

    async updateProduct( id: string, productUpdate: ProductDTO): Promise <UpdateResult> {
        return ( await this.execRepository).update( id, productUpdate );
    }
}