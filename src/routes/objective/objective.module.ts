import { Module } from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { ObjectiveController } from './objective.controller';
import { ObjectiveResolver } from './objective.resolver';
import { ObjectiveModel } from '@models/objective/objective.model';
import { DbModule } from '@db/db.module';

@Module({
  imports: [DbModule],
  providers: [ObjectiveService, ObjectiveResolver, ObjectiveModel],
  controllers: [ObjectiveController],
})
export class ObjectiveModule {}
