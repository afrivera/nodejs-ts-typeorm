import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.service';


export class CustomerController {

    constructor( private readonly customerService: CustomerService = new CustomerService()){}

    async getCustomers( req: Request, res: Response) {
        try {
            const data = await this.customerService.findAllCustomers();
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async getCustomerById( req: Request, res: Response ){
        try {
            const { id }  = req.params;
            const data = await this.customerService.findCustomerById( id );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }

    async createCustomer( req: Request, res: Response ){
        try {
            const data = await this.customerService.createCustomer( req.body );
            res.json( data );
            
        } catch (error) {
            console.log(error);
        }
    }

    async updateCustomer( req: Request, res: Response ){
        try {
            const { id } = req.params;
            const data = await this.customerService.updateCustomer( id, req.body );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCustomer( req: Request, res: Response ){
        try {
            const { id } = req.params;
            const data = await this.customerService.deleteCustomer( id );
            res.json( data );
        } catch (error) {
            console.log(error);
        }
    }
}