// import {
//   BelongsToMany,
//   Column,
//   DataType,
//   Model,
//   PrimaryKey,
//   Table,
// } from 'sequelize-typescript';
// import { ResearchInstanceType } from './research-instance-type.model';
// import { InferAttributes, InferCreationAttributes } from 'sequelize';
// import { PlatformSettingResearchInstanceType } from './platform-setting-research-instance-type.model';

// export enum EntityType {
//   GLOBAL = 'global',
//   ORGANISATION = 'organisation',
//   USER = 'user',
// }

// @Table({
//   underscored: true,
//   modelName: 'PlatformSettings',
// })
// export class PlatformSettings extends Model<
//   InferAttributes<PlatformSettings>,
//   InferCreationAttributes<PlatformSettings>
// > {
//   @PrimaryKey
//   @Column({
//     type: DataType.UUID,
//     defaultValue: DataType.UUIDV4,
//   })
//   declare id: string;

//   @Column({
//     type: DataType.ENUM<EntityType>,
//     values: Object.values(EntityType),
//   })
//   declare entity_type: string;

//   @Column({
//     type: DataType.BOOLEAN,
//     defaultValue: true,
//   })
//   declare auth_enable_put_jwt_token: boolean;

//   @Column({
//     type: DataType.BOOLEAN,
//     allowNull: false,
//   })
//   declare auth_with_jwt: boolean;

//   @Column({
//     type: DataType.ARRAY(DataType.UUID),
//   })
//   declare default_notifications: string[];

//   @BelongsToMany(() => ResearchInstanceType, {
//     through: {
//       model: () => PlatformSettingResearchInstanceType,
//     },
//   })
//   defaultResearchInstanceType!: ResearchInstanceType;

//   @Column({
//     type: DataType.BOOLEAN,
//     defaultValue: true,
//   })
//   declare dave_validation_tab: boolean;

//   @Column({
//     type: DataType.BOOLEAN,
//     defaultValue: true,
//   })
//   declare enable_custom_startup_scripts: boolean;

//   @Column({
//     type: DataType.BOOLEAN,
//     defaultValue: false,
//   })
//   declare enable_framework_v7: boolean;

//   @Column({
//     type: DataType.BOOLEAN,
//     defaultValue: true,
//   })
//   declare enable_framework_v8: boolean;

//   @Column({
//     type: DataType.BOOLEAN,
//     defaultValue: true,
//   })
//   declare enable_framework_select: boolean;

//   @Column({
//     type: DataType.BOOLEAN,
//     defaultValue: true,
//   })
//   declare enable_ide_select: boolean;

//   @Column({
//     type: DataType.DOUBLE,
//     defaultValue: 20,
//   })
//   declare ip_whitelist_limit: number;

//   @Column({
//     type: DataType.ARRAY(DataType.STRING),
//   })
//   declare access_token_permissions_datasets: string[];

//   @Column({
//     type: DataType.ARRAY(DataType.STRING),
//   })
//   declare access_token_permissions_instruments: string[];

//   @Column({
//     type: DataType.ARRAY(DataType.STRING),
//   })
//   declare access_token_permissions_strategy: string[];
// }

import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ResearchInstanceType } from './research-instance-type.model';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

export enum EntityType {
  GLOBAL = 'global',
  ORGANISATION = 'organisation',
  USER = 'user',
}

@Table({
  underscored: true,
  modelName: 'PlatformSettings',
})
export class PlatformSettings extends Model<
  InferAttributes<PlatformSettings>,
  InferCreationAttributes<PlatformSettings>
> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.ENUM<EntityType>,
    values: Object.values(EntityType),
  })
  declare entityType: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare authEnablePutJwtToken: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare authWithJwt: boolean;

  @Column({
    type: DataType.ARRAY(DataType.UUID),
  })
  declare defaultNotifications: string[];

  @ForeignKey(() => ResearchInstanceType)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare defaultResearchInstanceTypeId: string;

  @BelongsTo(() => ResearchInstanceType)
  declare defaultResearchInstanceType?: CreationOptional<ResearchInstanceType>;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare daveValidationTab: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare enableCustomStartupScripts: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare enableFrameworkV7: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare enableFrameworkV8: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare enableFrameworkSelect: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare enableIdeSelect: boolean;

  @Column({
    type: DataType.DOUBLE,
    defaultValue: 20,
  })
  declare ipWhitelistLimit: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare accessTokenPermissionsDatasets: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare accessTokenPermissionsInstruments: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  declare accessTokenPermissionsStrategy: string[];
}
