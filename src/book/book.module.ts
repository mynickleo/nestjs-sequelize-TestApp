import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from 'src/database/postgre/models/Book/Book.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookRepositoryModule } from 'src/database/postgre/repository/Book/BookRepository.module';

@Module({
  imports: [BookRepositoryModule],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
