import { Query, Resolver } from '@nestjs/graphql';
import { Objective } from '@models/objective/objective.schema';
import { ObjectiveService } from './objective.service';

@Resolver('Objective')
export class ObjectiveResolver {
  constructor(private objectiveService: ObjectiveService) {}
  @Query(() => [Objective])
  async getAllObjectives() {
    return await this.objectiveService.findAll();
  }
}
