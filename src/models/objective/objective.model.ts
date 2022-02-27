import { Connection } from 'mongoose';
import { ObjectiveSchema } from '@models/objective/objective.schema';
import {
  TOKEN_DB_CONNECTION,
  TOKEN_OBJECTIVE_MODEL,
} from '@src/token.constant';

export const ObjectiveModel = {
  provide: TOKEN_OBJECTIVE_MODEL,
  useFactory: (connection: Connection) =>
    connection.model('Objective', ObjectiveSchema, 'objectives'),
  inject: [TOKEN_DB_CONNECTION],
};
