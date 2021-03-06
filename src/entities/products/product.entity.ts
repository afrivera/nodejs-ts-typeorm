import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CategoryEntity } from "../categories/category.entity";
import { PurchasesProductsEntity } from "../purchases-products/purchases-products.entity";


@Entity('product')
export class ProductEntity extends BaseEntity{

    @Column()
    productName!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;

    @ManyToOne(()=> CategoryEntity, (category)=> category.products)
    @JoinColumn({ name: 'category_id'})
    category!: CategoryEntity;

    @OneToMany(()=> PurchasesProductsEntity, (purchaseProduct)=> purchaseProduct.product )
    purchaseProduct!: PurchasesProductsEntity [];
}