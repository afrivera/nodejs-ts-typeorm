import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { CustomerEntity } from "../../entities/customers/customer.entity";

export class CustomerDTO extends BaseDTO {

    @IsNotEmpty()
    address!: string;

    @IsNotEmpty()
    dni!: number;
    
    @IsNotEmpty()
    user!: CustomerEntity;
}
