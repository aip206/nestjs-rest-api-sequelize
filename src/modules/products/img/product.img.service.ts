import { Injectable, Inject } from "@nestjs/common";
import { PRODUCT_IMG_REPOSITORY } from "src/core/constants";
import { ProductImg } from "./product.img.entity";

@Injectable()
export class ProductImgService {
    constructor(@Inject(PRODUCT_IMG_REPOSITORY) private readonly productImgRepository: typeof ProductImg){}
    
    async createBulk(urls) : Promise<void> {
        await this.productImgRepository.bulkCreate(urls);
    }

    async deleteImage(id: number): Promise<void> {
       await this.productImgRepository.destroy({where:{id}})
    }
}