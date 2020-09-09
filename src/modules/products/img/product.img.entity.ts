import { Table, Column, DataType, BelongsTo, ForeignKey, Model } from "sequelize-typescript";
import { Product } from "../product.entity";
@Table ({
    tableName: 'product_img'
})
export class ProductImg extends Model<ProductImg>{

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    url: string;

    @ForeignKey(()=> Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId: number;

}