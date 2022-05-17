import { BaseService } from '../config/baseService';
import { CustomerEntity } from '../entities/customers/customer.entity';
import { CustomerDTO } from '../dto/customers/customer.dto';
import { DeleteResult, UpdateResult } from 'typeorm';


export class CustomerService extends BaseService<CustomerEntity> {

    constructor(  ){
        super( CustomerEntity )
    }

    async findAllCustomers(): Promise <CustomerEntity []> {
        return ( await this.execRepository).find();
    }

    async findCustomerById( id: string ): Promise <CustomerEntity | null > {
        return ( await this.execRepository).findOneBy( { id })
    }

    async createCustomer( customer: CustomerDTO ): Promise <CustomerEntity> {
        return ( await this.execRepository).save( customer );
    }

    async deleteCustomer( id: string ): Promise <DeleteResult> {
        return ( await this.execRepository).delete( id );
    }

    async updateCustomer( id: string, customerUpdate: CustomerDTO ): Promise <UpdateResult> {
        return ( await this.execRepository).update( id, customerUpdate);
    }

}