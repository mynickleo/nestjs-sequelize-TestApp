import { Module } from '@nestjs/common';
import { Book } from 'src/database/postgre/models/Book/Book.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookRepositoryService } from './BookRepository.service';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  controllers: [],
  providers: [BookRepositoryService],
  exports: [BookRepositoryService],
})
export class BookRepositoryModule {}
