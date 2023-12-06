import { Deployment, PlatformSettings, ResearchInstanceType } from '@database';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeploymentsService } from './deployments.service';
import { DeploymentsController } from './deployments.controller';

@Module({
  imports: [SequelizeModule.forFeature([Deployment, PlatformSettings, ResearchInstanceType])],
  controllers: [DeploymentsController],
  providers: [DeploymentsService],
})
export class DeploymentsModule {}
