import {
    CreatedAt, DeletedAt, Table, UpdatedAt, Model
} from 'sequelize-typescript';


@Table
export class BaseModel<T> extends Model<T> {

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedDate: Date;

    @DeletedAt
    deletionDate: Date;
}