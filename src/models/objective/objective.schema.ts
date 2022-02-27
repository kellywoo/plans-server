import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema } from 'mongoose';
import { format } from 'date-fns';

const getToday = () => {
  return format(new Date(), 'yyyy-MM-dd');
};

export const ObjectiveSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true, trim: true },
  from: { type: String, default: getToday, match: /\d{4}-\d{2}-\d{2}/ },
  to: { type: String, match: /\d{4}-\d{2}-\d{2}/ },
  children: [Schema.Types.ObjectId],
  public: { type: Boolean, default: false },
});

@ObjectType()
export class Objective extends Document {
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field()
  from: number;

  @Field()
  to: number;

  @Field()
  children: string[];

  @Field()
  public: boolean;
}

@ObjectType()
export class CreateObjectiveInput {
  @Field()
  title: string;

  @Field()
  from: number;

  @Field()
  to: number;
}
