import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookDto } from 'src/book/dto/createBook.dto';
import { Book } from 'src/database/postgre/models/Book/Book.model';

@Injectable()
export class BookRepositoryService {
    constructor(@InjectModel(Book) private readonly bookModel: typeof Book){}

    async createBook(createBookDto: CreateBookDto){
        const newBook = new Book(createBookDto);
        return await newBook.save();
    }

    async findAll(){
        return this.bookModel.findAll();
    }

    async findById(id: number){
        return this.bookModel.findOne({where: {id}});
    }

    async findByName(name: string){
        return this.bookModel.findOne({where: {name: name}});
    }

    async deleteById(id: number){
        return this.bookModel.destroy({where: {id}});
    }
}
