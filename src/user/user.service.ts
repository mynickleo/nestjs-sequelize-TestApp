import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserRepositoryService } from 'src/database/postgre/repository/User/UserRepository.service';

@Injectable()
export class UserService {
    constructor(private userRepositoryService: UserRepositoryService){}

    async createUser(createUserDto: CreateUserDto){
        return this.userRepositoryService.createUser(createUserDto);
    }

    async getAllUsers(){
        return this.userRepositoryService.findAll();
    }

    async getUserById(id: number){
        return this.userRepositoryService.findById(id);
    }

    async getUserByName(name: string){
        return this.userRepositoryService.findByName(name);
    }

    async deleteUserById(id: number){
        return this.userRepositoryService.deleteById(id);
    }
}
