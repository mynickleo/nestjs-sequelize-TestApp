import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/postgre/models/User/User.model';
import { CreateUserDto } from 'src/user/dto/createUser.dto';

@Injectable()
export class UserRepositoryService {
    constructor(@InjectModel(User) private readonly userModel: typeof User){}

    async createUser(createUserDto: CreateUserDto){
        const newUser = new User(createUserDto);
        return await newUser.save();
    }

    async findAll(){
        return this.userModel.findAll();
    }

    async findById(id: number){
        return this.userModel.findOne({where: {id}});
    }

    async findByName(name: string){
        return this.userModel.findOne({where: {username: name}});
    }

    async deleteById(id: number){
        return this.userModel.destroy({where: {id}});
    }
}
