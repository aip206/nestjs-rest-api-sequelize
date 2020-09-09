import { PRODUCT_REPOSITORY, PRODUCT_IMG_REPOSITORY } from "src/core/constants";
import { Product } from "./product.entity";
import { ProductImg } from "./img/product.img.entity";

export const productProviders = [{
    provide: PRODUCT_REPOSITORY,
    useValue: Product
}]