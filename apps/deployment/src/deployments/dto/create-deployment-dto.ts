import { Deployment, DeploymentStatus } from '@database';
import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { InferCreationAttributes } from 'sequelize';

export class CreateDeploymentDto
  implements InferCreationAttributes<Deployment>
{
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsUUID()
  workspace: string;

  @ApiProperty()
  @IsUUID()
  researchEnvironment: string;

  @ApiProperty()
  @IsEnum(DeploymentStatus)
  status: DeploymentStatus;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  scriptFriendlyName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  scriptRelativePath?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gitBranch: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gitHash: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  schedule: string;

  @ApiProperty()
  @IsUUID()
  notificationPreferences: string;

  @ApiProperty()
  @IsUUID()
  @Optional()
  user: string;

  @ApiProperty()
  @IsUUID()
  createdBy: string;
}
