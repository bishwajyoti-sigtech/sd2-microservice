import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { WorkspacePermission } from './workspace-permission.model';
import {
  CreationOptional,
  HasManyGetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Deployment } from './deployments.model';

@Table({
  underscored: true,
  modelName: 'Workspaces',
})
export class Workspace extends Model<
  InferAttributes<Workspace>,
  InferCreationAttributes<Workspace>
> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare originalTemplate: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare giteaRepositoryUrl: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare owner: string;

  @HasMany(() => Deployment)
  declare deployments: CreationOptional<Deployment[]>;
  declare getDeployments: HasManyGetAssociationsMixin<Deployment[]>;

  @HasMany(() => WorkspacePermission)
  declare permissions: CreationOptional<WorkspacePermission[]>;
  declare getPermissions: HasManyGetAssociationsMixin<WorkspacePermission>;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare status: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare createdBy: string;
}
