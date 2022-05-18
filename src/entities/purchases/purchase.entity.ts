import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../customers/customer.entity";
import { PurchasesProductsEntity } from "../purchases-products/purchases-products.entity";


@Entity({ name: 'purchase'})
export class PurchaseEntity extends BaseEntity{

    @Column()
    status!: string;

    @Column()
    paymentMethod!: string;

    @ManyToOne(()=> CustomerEntity, (customer)=> customer.purchases)
    @JoinColumn({ name: 'customer_id'})
    customer!: CustomerEntity;

    @OneToMany(()=> PurchasesProductsEntity, (purchaseProduct)=> purchaseProduct.purchase)
    purchaseProduct!: PurchasesProductsEntity [];
}