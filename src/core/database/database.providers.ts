import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from 'src/modules/users/user.entity';
import { Product } from 'src/modules/products/product.entity';
import { ProductImg } from 'src/modules/products/img/product.img.entity';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User, Product, ProductImg]);
        await sequelize.sync();
        return sequelize;
    },
}];