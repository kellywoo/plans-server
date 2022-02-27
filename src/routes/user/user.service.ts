import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TOKEN_USER_MODEL } from '@src/token.constant';
import { CreateUserInput, User } from '@models/user/user.schema';

@Injectable()
export class UserService {
  constructor(@Inject(TOKEN_USER_MODEL) private userModel: Model<User>) {}
  getUser(id): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  createUser(objective: CreateUserInput): Promise<User> {
    return this.userModel.create(objective);
  }
}
