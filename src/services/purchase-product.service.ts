import { BaseService } from '../config/baseService';
import { PurchasesProductsEntity } from '../entities/purchases-products/purchases-products.entity';
import { ProductService } from './product.service';
import { PurchaseProductDTO } from '../dto/purchase-product/purchase-product.dto';
import { UpdateResult, DeleteResult } from 'typeorm';



export class PurchaseProductService extends BaseService<PurchasesProductsEntity> {
    constructor( private readonly productService: ProductService = new ProductService()){
        super( PurchasesProductsEntity );
    }

    async findAllPurchaseProducts(): Promise <PurchasesProductsEntity []>{
        return ( await this.execRepository).find();
    }

    async findPurchaseProductsById( id: string ): Promise <PurchasesProductsEntity | null>{
        return ( await this.execRepository).findOneBy({ id });
    }

    async createPurchaseProduct( purchaseProduct: PurchaseProductDTO ): Promise <PurchasesProductsEntity>{
        const newPP = ( await this.execRepository).create( purchaseProduct);
        const prod = await this.productService.findProductById( newPP.product.id );
        newPP.totalPrice = prod!.price * newPP.quantityProduct;
        return ( await this.execRepository).save( newPP );
    }

    async updatePurchaseProducts( id: string, purchaseProduct: PurchaseProductDTO ): Promise <UpdateResult>{
        return ( await this.execRepository).update( id, purchaseProduct );
    }

    async deletePurchaseProducts( id: string ): Promise <DeleteResult>{
        return ( await this.execRepository).delete( id );
    }
}