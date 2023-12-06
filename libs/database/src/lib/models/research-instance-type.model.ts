// import {
//   BelongsToMany,
//   Column,
//   DataType,
//   Model,
//   PrimaryKey,
//   Table,
// } from 'sequelize-typescript';
// import {
//   CreationOptional,
//   InferAttributes,
//   InferCreationAttributes,
// } from 'sequelize';
// import { PlatformSettings } from './platform-settings.model';
// import { PlatformSettingResearchInstanceType } from './platform-setting-research-instance-type.model';

// @Table({
//   underscored: true,
//   modelName: 'ResearchInstanceType',
// })
// export class ResearchInstanceType extends Model<
//   InferAttributes<ResearchInstanceType>,
//   InferCreationAttributes<ResearchInstanceType>
// > {
//   @PrimaryKey
//   @Column({
//     type: DataType.UUID,
//     defaultValue: DataType.UUIDV4,
//   })
//   declare id: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   declare name: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   declare friendly_name: string;

//   @Column({
//     type: DataType.DOUBLE,
//     allowNull: false,
//   })
//   declare cpu: number;

//   @Column({
//     type: DataType.DOUBLE,
//     allowNull: false,
//   })
//   declare memory: string;

//   @BelongsToMany(() => PlatformSettings, {
//     through: {
//       model: () => PlatformSettingResearchInstanceType,
//     },
//   })
//   declare platform_settings: CreationOptional<PlatformSettings[]>;
// }

import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { PlatformSettings } from './platform-settings.model';

@Table({
  underscored: true,
  modelName: 'ResearchInstanceType',
})
export class ResearchInstanceType extends Model<
  InferAttributes<ResearchInstanceType>,
  InferCreationAttributes<ResearchInstanceType>
> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare friendlyName: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  declare cpu: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  declare memory: number;

  @HasMany(() => PlatformSettings)
  declare platformSettings: CreationOptional<PlatformSettings[]>;
}
