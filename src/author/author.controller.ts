import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/createAuthor.dto';

@Controller('authors')
export class AuthorController {
    constructor(private authorService: AuthorService){}

    @Post()
    createAuthor(@Body() createAuthorDto: CreateAuthorDto){
        return this.authorService.createAuthor(createAuthorDto);
    }

    @Get()
    getAuthors(){
        return this.authorService.getAllAuthors();
    }

    @Get(':id')
    async getAuthorById(@Param('id', ParseIntPipe) id: number){
        return this.authorService.getAuthorById(id);
    }

    @Get(':name')
    async getAuthorByName(@Param('/name') name: string){
        return this.authorService.getAuthorByName(name);
    }

    @Delete('id')
    async deleteAuthorById(@Param('id', ParseIntPipe) id: number){
        return this.authorService.deleteAuthorById(id);
    }
}
