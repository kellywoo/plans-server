import * as mongoose from 'mongoose';
import { TOKEN_DB_CONNECTION } from '@src/token.constant';
import { url } from '@configs/mongodb';

export const dbProviders = [
  {
    provide: TOKEN_DB_CONNECTION,
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(url),
  },
];
