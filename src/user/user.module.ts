import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/database/postgre/models/User/User.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRepositoryModule } from 'src/database/postgre/repository/User/UserRepository.module';

@Module({
  imports: [UserRepositoryModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
