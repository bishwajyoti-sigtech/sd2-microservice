import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { PlatformSettings } from './platform-settings.model';
import { ResearchInstanceType } from './research-instance-type.model';

@Table({
  underscored: true,
  modelName: 'PlatformSettingResearchInstanceType',
})
export class PlatformSettingResearchInstanceType extends Model<
  InferAttributes<PlatformSettingResearchInstanceType>,
  InferCreationAttributes<PlatformSettingResearchInstanceType>
> {
  @ForeignKey(() => PlatformSettings)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare platformSettingId: string;

  @ForeignKey(() => ResearchInstanceType)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare researchInstanceTypeId: string;
}
