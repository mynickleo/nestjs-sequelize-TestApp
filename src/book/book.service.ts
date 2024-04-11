import { Injectable } from '@nestjs/common';
import { Book } from 'src/database/postgre/models/Book/Book.model';
import { CreateBookDto } from './dto/createBook.dto';
import { BookRepositoryService } from 'src/database/postgre/repository/Book/BookRepository.service';

@Injectable()
export class BookService {
    constructor(private bookRepositoryService: BookRepositoryService){}

    async createBook(createBookDto: CreateBookDto){
        return this.bookRepositoryService.createBook(createBookDto);
    }

    async getAllBooks(){
        return this.bookRepositoryService.findAll();
    }

    async getBookById(id: number){
        return this.bookRepositoryService.findById(id);
    }

    async getBookByName(name: string){
        return this.bookRepositoryService.findByName(name);
    }

    async deleteBookById(id: number){
        return this.bookRepositoryService.deleteById(id);
    }
}
