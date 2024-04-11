import {Table, Column, Model, HasOne} from 'sequelize-typescript';
import { Author } from '../Author/Author.model';

@Table
export class Book extends Model<Book>{
    @Column(
        {
            autoIncrementIdentity: true,
            primaryKey: true,
            unique: true,
        }
    )
    id: number;

    @Column
    name: string;

    @Column
    price: number;

    @HasOne(() => Author, {onDelete: 'CASCADE', foreignKey: 'authorId'})
    authorId?: number;
}