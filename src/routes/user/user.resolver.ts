import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '@models/user/user.schema';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => User)
  async getUser(id) {
    return await this.userService.getUser(id);
  }
}
