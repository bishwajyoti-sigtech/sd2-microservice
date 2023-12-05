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
  declare original_template: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare gitea_repository_url: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare owner: string;

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
  declare created_by: string;
}
