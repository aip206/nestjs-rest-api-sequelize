import { Module } from '@nestjs/common';
import { productImgProviders } from './product.img.providers';
import { ProductImgService } from './product.img.service';

@Module({
  providers: [ ProductImgService, ...productImgProviders],
  exports: [ProductImgService]
})
export class ProductImgModule {}
