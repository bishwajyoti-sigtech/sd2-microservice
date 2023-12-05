import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DeploymentsModule } from './deployments/deployments.module';
import { CustomWrapperModule } from '@database';
import { envValidation } from './validations/env.validation';

@Module({
  imports: [
    CustomWrapperModule.forRoot(envValidation),
    ConfigModule.forRoot(),
    DeploymentsModule,
  ],
})
export class AppModule {}
