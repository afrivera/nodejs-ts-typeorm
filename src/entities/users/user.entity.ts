import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { RoleType } from "../../dto/users/user.dto";
import { CustomerEntity } from "../customers/customer.entity";

@Entity({ name: 'user'})
export class UserEntity extends BaseEntity{
 
    @Column()
    username!: string;

    @Column()
    name!: string;

    @Column()
    lastname!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    city!: string;

    @Column()
    province!: string;

    @Column({
        type: "enum", 
        enum: RoleType,
        nullable: false,
        default: "USER"
    })
    role!: string;

    @OneToOne(()=> CustomerEntity, (customer)=> customer.user)
    customer!: CustomerEntity 
}