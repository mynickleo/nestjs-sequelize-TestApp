import { IsNotEmpty, IsString, IsOptional, ValidateNested, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { CreateBookDto } from "src/book/dto/createBook.dto";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsOptional()
    @IsNumber()
    bookId?: number; 
}