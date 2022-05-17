import { BaseService } from "../config/baseService";
import { CategoryEntity } from "../entities/categories/category.entity";
import { CategoryDTO } from '../dto/categories/category.dto';
import { DeleteResult, UpdateResult } from 'typeorm';



export class CategoryService extends BaseService<CategoryEntity> {

    constructor(){
        super(CategoryEntity);
    }

    async findAllCategories(): Promise <CategoryEntity [] >{
        return (await this.execRepository).find();
    }

    async findCategoryById( id:string): Promise <CategoryEntity | null >{
        return (await this.execRepository).findOneBy({ id });
    }

    async createCategory( category: CategoryDTO ): Promise <CategoryEntity>{
        return (await this.execRepository).save( category);
    }

    async deleteCategory( id: string  ): Promise <DeleteResult>{
        return (await this.execRepository).delete( { id });
    }

    async updateCategory( id: string, category: CategoryDTO ): Promise <UpdateResult>{
        return (await this.execRepository).update( id, category);
    }
}