import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize';

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
  declare friendly_name: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  declare cpu: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  declare memory: string;

  // @HasOne(() => PlatformSettings, {
  //   foreignKey: {
  //     name: 'default_research_instance',
  //   },
  // })
  // declare platform_setting: CreationOptional<PlatformSettings>;
}
