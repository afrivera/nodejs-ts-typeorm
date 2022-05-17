import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';
import { PurchaseEntity } from '../../entities/purchases/purchase.entity';
import { ProductEntity } from '../../entities/products/product.entity';


export class PurchaseProductDTO extends BaseDTO {
    @IsNotEmpty()
    quantityProduct!: number;

    @IsNotEmpty()
    totalPrice?: number;

    @IsNotEmpty()
    purchase?: PurchaseEntity;

    @IsNotEmpty()
    product?: ProductEntity;

}