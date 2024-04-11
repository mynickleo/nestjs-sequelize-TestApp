import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/createAuthor.dto';
import { Author } from 'src/database/postgre/models/Author/Author.model';
import { InjectModel } from '@nestjs/sequelize';
import { AuthorRepositoryService } from 'src/database/postgre/repository/Author/AuthorRepository.service';

@Injectable()
export class AuthorService {
    constructor(private authorRepositoryService: AuthorRepositoryService){}

    async createAuthor(createAuthorDto: CreateAuthorDto){
        return this.authorRepositoryService.createAuthor(createAuthorDto);
    }

    async getAllAuthors(){
        return this.authorRepositoryService.findAll();
    }

    async getAuthorById(id: number){
        return this.authorRepositoryService.findById(id);
    }

    async getAuthorByName(name: string){
        return this.authorRepositoryService.findByName(name);
    }

    async deleteAuthorById(id: number){
        return this.authorRepositoryService.deleteById(id);
    }
}
