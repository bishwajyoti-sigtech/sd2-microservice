import { Module } from '@nestjs/common';
import { DeploymentsService } from './deployments.service';
import { deploymentsProviders } from './deployments.provider';
import { DeploymentsController } from './deployments.controller';
import { Deployment } from '@database';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Deployment])],
  controllers: [DeploymentsController],
  providers: [DeploymentsService, ...deploymentsProviders],
})
export class DeploymentsModule {}
