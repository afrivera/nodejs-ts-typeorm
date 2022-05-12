import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../customers/customer.entity";

@Entity({ name: 'user'})
export class UserEntity extends BaseEntity{

    @Column()
    username!: string;

    @Column()
    name!: string;

    @Column()
    lastname!: string;

    @Column({
        nullable: true
    })
    jobposition?: string;

    @Column()
    numberphone!: number;

    @OneToOne(()=> CustomerEntity, (customer)=> customer.user)
    customer!: CustomerEntity
}