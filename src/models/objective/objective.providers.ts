import { Connection } from 'mongoose';
import { ObjectiveSchema } from '@models/objective/objective.schema';
import {
  TOKEN_DB_CONNECTION,
  TOKEN_OBJECTIVE_MODEL,
} from '@src/token.constant';

export const ObjectiveProviders = [
  {
    provide: TOKEN_OBJECTIVE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Objective', ObjectiveSchema, 'Objective'),
    inject: [TOKEN_DB_CONNECTION],
  },
];
