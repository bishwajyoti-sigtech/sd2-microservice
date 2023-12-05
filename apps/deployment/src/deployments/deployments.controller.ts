import { DeploymentsService } from './deployments.service';

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateDeploymentDto } from './dto/create-deployment-dto';
import { QueryDeploymentsDto } from './dto/query-deployments-dto';

@Controller('/deployments')
export class DeploymentsController {
  constructor(private readonly deploymentsService: DeploymentsService) {}
  @Post()
  create(@Body() createDeploymentDto: CreateDeploymentDto) {
    return this.deploymentsService.create(createDeploymentDto);
  }

  @Get()
  getAll(@Query() queryParams: QueryDeploymentsDto) {
    return this.deploymentsService.find(queryParams);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.deploymentsService.findById(id);
  }
}
