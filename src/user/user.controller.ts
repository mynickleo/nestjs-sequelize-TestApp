import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Get()
    getUsers(){
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number){
        return this.userService.getUserById(id);
    }

    @Get('name/:name')
    async getUserByName(@Param('name') name: string){
        console.log(name);
        return this.userService.getUserByName(name.toString());
    }

    @Delete('id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        return this.userService.deleteUserById(id);
    }
}
