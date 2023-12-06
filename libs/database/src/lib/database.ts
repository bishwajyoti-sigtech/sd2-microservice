import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import * as Joi from 'joi';
import { models } from './models/root';

@Module({})
export class CustomWrapperModule {
  public static forRoot<T>(
    envValidationSchema: Joi.ObjectSchema<T>
  ): DynamicModule {
    return {
      module: CustomWrapperModule,
      imports: [
        ConfigModule.forRoot({
          envFilePath: ['.env.local', '.env'],
          isGlobal: true,
          validationSchema: envValidationSchema,
        }),
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (
            configService: ConfigService
          ): Promise<SequelizeModuleOptions> => {
            return {
              uri: configService.get('NX_DATABASE_URI'),
              synchronize: true,
              autoLoadModels: true,
              logging:
                configService.get('NODE_ENV') === 'local' ? console.log : false,
              hooks: {
                beforeConnect({ host }) {
                  console.log(
                    `Attempting to connect to database at host ${host}`
                  );
                },
                beforeSync() {
                  console.log(`Attempting to sync with the database ... `);
                },
                afterSync() {
                  console.log(`Completed syncing with the database ... `);
                },
                afterConnect(_, { host }) {
                  console.log(
                    `Successfully established connection to database at host ${host}`
                  );
                },
                afterDisconnect() {
                  console.log(`Successfully disconnected from the database`);
                },
              },
              models,
            };
          },
        }),
      ],
      controllers: [],
      providers: [],
    };
  }
}
