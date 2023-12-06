import { DeploymentStatus } from '@database';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export class QueryDeploymentsDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  pageSize?: number = 10;

  @IsOptional()
  @IsEnum(DeploymentStatus)
  status?: DeploymentStatus = null;
}
