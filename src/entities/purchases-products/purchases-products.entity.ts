import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from '../products/product.entity';
import { PurchaseEntity } from '../purchases/purchase.entity';

@Entity({name: 'purchases_products'})
export class PurchasesProducts extends BaseEntity {

    @Column()
    quantityProduct!: number;

    @Column()
    totalPrice!: number;

    @ManyToOne(()=> PurchaseEntity, (purchase)=> purchase.purchaseProduct)
    @JoinColumn({ name: 'purchase_id'})
    purchase!: PurchaseEntity;

    @ManyToOne(()=> ProductEntity, (purchase)=> purchase.purchaseProduct)
    @JoinColumn({ name: 'product_id'})
    product!: ProductEntity;

}