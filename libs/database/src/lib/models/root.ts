import { Deployment } from './deployments.model';
import { PlatformSettings } from './platform-settings.model';
import { ResearchInstanceType } from './research-instance-type.model';
import { WorkspacePermission } from './workspace-permission.model';
import { Workspace } from './workspace.model';

/**
 * @description This is the array where you have to keep on adding your new schemas for the sequelize config to initialize
 */
export const models = [
  Deployment,
  Workspace,
  WorkspacePermission,
  PlatformSettings,
  ResearchInstanceType,
];
