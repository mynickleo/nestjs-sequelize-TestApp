import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from 'src/database/postgre/models/Author/Author.model';
import { AuthorRepositoryService } from './AuthorRepository.service';

@Module({
  imports: [SequelizeModule.forFeature([Author])],
  controllers: [],
  providers: [AuthorRepositoryService],
  exports: [AuthorRepositoryService],
})
export class AuthorRepositoryModule {}
