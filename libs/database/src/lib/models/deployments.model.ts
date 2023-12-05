import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

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
export class DeploymentModel
  extends Model<
    InferAttributes<DeploymentModel>,
    InferCreationAttributes<DeploymentModel>
  >
  implements Model
{
  @PrimaryKey
  @Column({
    type: DataType.UUID,
  })
  declare id: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare user: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare workspace: string;

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
