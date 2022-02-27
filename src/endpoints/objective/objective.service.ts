import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Objective } from '@models/objective/objective.schema';
import { TOKEN_OBJECTIVE_MODEL } from '@src/token.constant';

@Injectable()
export class ObjectiveService {
  constructor(
    @Inject(TOKEN_OBJECTIVE_MODEL) private objectiveModel: Model<Objective>,
  ) {}
  findAll(): Promise<Objective[]> {
    return this.objectiveModel.find().exec();
  }
}
