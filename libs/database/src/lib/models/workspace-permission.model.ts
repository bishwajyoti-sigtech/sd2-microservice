import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Workspace } from "./workspace.model";
import { InferAttributes, InferCreationAttributes, NonAttribute } from "sequelize";

export enum PermissionLevel {
  ADMIN = "admin",
  VIEW = "view",
  EDIT = "edit",
}

@Table({
  underscored: true,
  modelName: "WorkspacePermissions",
})
export class WorkspacePermission extends Model<
  InferAttributes<WorkspacePermission>,
  InferCreationAttributes<WorkspacePermission>
> {
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

  @ForeignKey(() => Workspace)
  declare workspace?: NonAttribute<Workspace>;

  @Column({
    type: DataType.ENUM<PermissionLevel>,
    values: Object.values(PermissionLevel),
  })
  declare permission_level: PermissionLevel;
}
