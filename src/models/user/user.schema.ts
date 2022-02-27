import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, trim: true },
  email: {
    type: String,
    required: true,
    match: /[^@]+@[^@]+\.[^@]{2,}$/,
    trim: true,
  },
  rewards: {
    type: Schema.Types.Mixed,
    default: {},
  },
});

@ObjectType()
export class User extends Document {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  rewards: Record<string, number>;
}

@ObjectType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;
}
