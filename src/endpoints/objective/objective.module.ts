import { Module } from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { ObjectiveController } from './objective.controller';
import { ObjectiveResolver } from './objective.resolver';
import { ObjectiveProviders } from '@models/objective/objective.providers';
import { DbModule } from '@db/db.module';

@Module({
  imports: [DbModule],
  providers: [ObjectiveService, ObjectiveResolver, ...ObjectiveProviders],
  controllers: [ObjectiveController],
})
export class ObjectiveModule {}
