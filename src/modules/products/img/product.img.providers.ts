import { PRODUCT_IMG_REPOSITORY } from "src/core/constants";
import { ProductImg } from "./product.img.entity";

export const productImgProviders = [{
    provide: PRODUCT_IMG_REPOSITORY,
    useValue: ProductImg
}]