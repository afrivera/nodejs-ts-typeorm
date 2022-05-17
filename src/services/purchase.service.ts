import { BaseService } from '../config/baseService';
import { PurchaseEntity } from '../entities/purchases/purchase.entity';
import { PurchaseDTO } from '../dto/purchases/purchase.dto';
import { DeleteResult, UpdateResult } from 'typeorm';


export class PurchaseService extends BaseService <PurchaseEntity> {

    constructor(){
        super( PurchaseEntity );
    }

    async findAllPurchases(): Promise <PurchaseEntity []> {
        return ( await this.execRepository).find();
    }

    async findPurchaseById( id: string ): Promise <PurchaseEntity | null > {
        return ( await this.execRepository).findOneBy({ id });
    }

    async createPurchase( purchase: PurchaseDTO ): Promise <PurchaseEntity > {
        return ( await this.execRepository).save( purchase );
    }

    async deletePurchase( id: string ): Promise <DeleteResult> {
        return ( await this.execRepository).delete({ id });
    }

    async updatePurchase( id: string, purchase: PurchaseDTO): Promise <UpdateResult> {
        return ( await this.execRepository).update( id, purchase );
    }
}