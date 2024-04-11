import { IsNotEmpty, IsString, IsOptional, ValidateNested, IsNumber } from "class-validator";

export class CreateBookDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    authorId: number;
}