import {Table, Column, Model, HasMany} from 'sequelize-typescript';
import { Book } from '../Book/Book.model';

@Table
export class User extends Model<User>{
    @Column(
        {
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        }
    )
    id: number;

    @Column
    username: string;

    @HasMany(() => Book, {foreignKey: 'bookId'})
    bookId?: number;
}