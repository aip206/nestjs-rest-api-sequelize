import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productProviders} from './product.providers';
import { ProductImgModule } from './img/product.img.module';

@Module({
  imports: [ProductImgModule],
  providers: [ProductsService, ...productProviders],
  controllers: [ProductsController]
})
export class ProductsModule {}
