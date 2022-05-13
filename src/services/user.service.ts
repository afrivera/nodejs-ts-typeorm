import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config/baseService";
import { UserDTO } from "../dto/users/user.dto";
import { UserEntity } from "../entities/users/user.entity";


export class UserService extends BaseService <UserEntity> {
    constructor(){
        super(UserEntity);
    }

    async findAllUsers(): Promise<UserEntity []>{
        return ( await this.execRepository).find();
    }

    async findUserById(id: string ): Promise <UserEntity | null > {
        return ( await this.execRepository).findOneBy({ id });
    }

    async createUser( user: UserDTO  ):Promise<UserEntity>{
        return ( await this.execRepository).save( user );
    }

    async deleteUser( id: string  ):Promise<DeleteResult>{
        return ( await this.execRepository).delete( { id } );
    }

    async updateUser( id: string, user: UserDTO  ):Promise<UpdateResult>{
        return ( await this.execRepository).update( id, user );
    }
}