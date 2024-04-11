import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from 'src/database/postgre/models/Author/Author.model';
import { AuthorRepositoryModule } from 'src/database/postgre/repository/Author/AuthorRepository.module';

@Module({
  imports: [AuthorRepositoryModule],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule {}
