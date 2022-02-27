import { Connection } from 'mongoose';
import { TOKEN_DB_CONNECTION, TOKEN_USER_MODEL } from '@src/token.constant';
import { UserSchema } from '@models/user/user.schema';

export const UserModel = {
  provide: TOKEN_USER_MODEL,
  useFactory: (connection: Connection) =>
    connection.model('User', UserSchema, 'users'),
  inject: [TOKEN_DB_CONNECTION],
};
