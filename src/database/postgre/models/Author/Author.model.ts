import {Table, Column, Model, HasMany} from 'sequelize-typescript';
import { Book } from '../Book/Book.model';

@Table
export class Author extends Model<Author>{
    @Column(
        {
            autoIncrementIdentity: true,
            primaryKey: true,
            unique: true,
        }
    )
    id: number;

    @Column
    authorName: string;

    @HasMany(() => Book, {onDelete: 'CASCADE', foreignKey: 'bookId'})
    bookId?: number;
}