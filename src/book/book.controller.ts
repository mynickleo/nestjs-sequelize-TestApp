import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/createBook.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService){}

    @Post()
    createAuthor(@Body() createBookDto: CreateBookDto){
        return this.bookService.createBook(createBookDto);
    }

    @Get()
    getBooks(){
        return this.bookService.getAllBooks();
    }

    @Get(':id')
    async getBookById(@Param('id', ParseIntPipe) id: number){
        return this.bookService.getBookById(id);
    }

    @Get(':name')
    async getBookByName(@Param('/name') name: string){
        return this.bookService.getBookByName(name);
    }

    @Delete('id')
    async deleteBookById(@Param('id', ParseIntPipe) id: number){
        return this.bookService.deleteBookById(id);
    }
}
