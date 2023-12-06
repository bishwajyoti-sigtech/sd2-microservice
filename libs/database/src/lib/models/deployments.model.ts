import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Workspace } from './workspace.model';

export enum DeploymentStatus {
  DEPLOYED = 'deployed',
  DEPLOYING = 'deploying',
  FAILED = 'failed',
  PAUSED = 'paused',
}

@Table({
  underscored: true,
  modelName: 'Deployments',
})
export class Deployment
  extends Model<
    InferAttributes<Deployment>,
    InferCreationAttributes<Deployment>
  >
  implements Model
{
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare user: string;

  @BelongsTo(() => Workspace)
  declare workspace?: CreationOptional<Workspace>;

  @ForeignKey(() => Workspace)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare workspaceId: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare researchEnvironment: string;

  @Column({
    type: DataType.ENUM<DeploymentStatus>,
    values: Object.values(DeploymentStatus),
  })
  declare status: DeploymentStatus;

  @Column({
    type: DataType.STRING,
  })
  declare scriptFriendlyName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare scriptRelativePath?: string;

  @Column({
    type: DataType.STRING,
  })
  declare gitBranch: string;

  @Column({
    type: DataType.STRING,
  })
  declare schedule: string;

  @Column({
    type: DataType.UUID,
  })
  declare createdBy: string;

  @Column({
    type: DataType.UUID,
  })
  declare notificationPreferences: string;
}
