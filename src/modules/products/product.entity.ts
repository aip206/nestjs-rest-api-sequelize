import { BaseModel } from "src/core/database/base.model";
import { Table, Column, DataType, BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { User } from "../users/user.entity";
import { ProductImg } from "./img/product.img.entity";

@Table(  {
    tableName: 'product'
})
export class Product extends BaseModel<Product> {

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
        defaultValue: 0.0
    })
    harga: number;

    @Column({
        type: DataType.DOUBLE,
        defaultValue: 0.0
    })
    diskon: number;

    @Column({
        type: DataType.TEXT
    })
    detail: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    stok: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    berat: number;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false
    })
    rate: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    kategori: string;

    @Column({
        type: DataType.STRING,
        defaultValue: "active"
    })
    status: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(()=> ProductImg, { onDelete: 'cascade', hooks: true })
    product_img: ProductImg[];


}