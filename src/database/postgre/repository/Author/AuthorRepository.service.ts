import { Injectable } from '@nestjs/common';
import { Author } from 'src/database/postgre/models/Author/Author.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAuthorDto } from 'src/author/dto/createAuthor.dto';

@Injectable()
export class AuthorRepositoryService {
    constructor(@InjectModel(Author) private readonly authorModel: typeof Author){}

    async createAuthor(createAuthorDto: CreateAuthorDto){
        const newAuthor = new Author(createAuthorDto);
        return await newAuthor.save();
    }

    async findAll(){
        return this.authorModel.findAll();
    }

    async findById(id: number){
        return this.authorModel.findOne({where: {id}});
    }

    async findByName(name: string){
        return this.authorModel.findOne({where: {authorName: name}});
    }

    async deleteById(id: number){
        return this.authorModel.destroy({where: {id}});
    }
}
