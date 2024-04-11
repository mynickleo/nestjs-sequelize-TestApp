import { IsNotEmpty, IsString, IsOptional, ValidateNested, IsNumber } from "class-validator";

export class CreateAuthorDto{
    @IsNotEmpty()
    @IsString()
    authorName: string;

    @IsOptional()
    @IsNumber()
    bookId?: number; 
}