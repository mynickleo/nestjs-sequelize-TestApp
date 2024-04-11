import { Module } from '@nestjs/common';
import { User } from 'src/database/postgre/models/User/User.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRepositoryService } from './UserRepository.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [],
  providers: [UserRepositoryService],
  exports: [UserRepositoryService],
})
export class UserRepositoryModule {}
