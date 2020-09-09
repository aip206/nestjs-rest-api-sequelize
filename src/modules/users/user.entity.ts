import { Table, Column, DataType } from "sequelize-typescript";
import { BaseModel } from "src/core/database/base.model";

@Table(
    {
        tableName: 'user'
    }
)
export class User extends BaseModel<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email:string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;

    @Column({
        type: DataType.ENUM,
        values: ['admin','buyer','seller']
    })
    role: string;
}