import { Injectable, Inject } from '@nestjs/common';
import { PRODUCT_REPOSITORY, PRODUCT_IMG_REPOSITORY } from 'src/core/constants';
import { Product } from './product.entity';
import { ProductDTO } from './dto/product.dto';
import { ProductImg } from './img/product.img.entity';
import { ProductImgService } from './img/product.img.service';

@Injectable()
export class ProductsService {
    constructor(@Inject(PRODUCT_REPOSITORY) private readonly productRepository: typeof Product,
    private productImgService: ProductImgService
    ){}

    async create(product: ProductDTO, userId): Promise<Product> {
        const prod =  await this.productRepository.create<Product>({...product, userId});
        const imgs = product.url.map((x)=>{return {url: x, productId: prod.id}});
        await this.productImgService.createBulk(imgs);

        return prod;
        
    }

    async findAll():  Promise<any> {
        return await this.productRepository.findAndCountAll({
            include:[{
                model: ProductImg,
                as: 'product_img', limit:1,attributes: ['url'],
            }]
        });
    }

    async getOne(id:number): Promise<Product> {
        return await this.productRepository.findOne({where:{id}, include:[{
            model: ProductImg,
                as: 'product_img', attributes: ['url'],
        }]});
    }

    async delete(id:number, userId:number) {
        return await this.productRepository.destroy({where: {id, userId}});
    }
}
