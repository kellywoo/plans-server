import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { typeDefs, resolvers } from 'graphql-scalars';
import { ObjectiveModule } from '@src/routes/objective/objective.module';
import { UserModule } from '@src/routes/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      // definitions: {  // requires ts-morph
      //   path: join(process.cwd(), 'src/graphql.ts'),
      //   outputAs: 'class',
      // },
      driver: ApolloDriver,
      typeDefs: [...typeDefs],
      resolvers: [resolvers],
    }),
    ObjectiveModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
