import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { DbModule } from '@db/db.module';
import { UserModel } from '@models/user/user.model';

@Module({
  imports: [DbModule],
  providers: [UserService, UserResolver, UserModel],
  controllers: [UserController],
})
export class UserModule {}
