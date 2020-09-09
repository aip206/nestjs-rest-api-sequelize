import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssessmentModule } from './assessment/assessment.module';
import { LoggerMiddleware } from './config/logger.middleware';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductImgModule } from './modules/products/img/product.img.module';
@Module({
  imports: [AssessmentModule, DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), UsersModule, AuthModule, ProductsModule,ProductImgModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      LoggerMiddleware
    ).exclude({ path: 'assessment', method: RequestMethod.GET }).forRoutes('assessment');
  }
}
