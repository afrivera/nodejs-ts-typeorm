import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';
import { CategoryEntity } from '../../entities/categories/category.entity';


export class ProductDTO extends BaseDTO{

    @IsNotEmpty()
    productName!:string;

    @IsNotEmpty()
    description!:string;

    @IsNotEmpty()
    price!:number;

    @IsNotEmpty()
    category!:CategoryEntity;

}