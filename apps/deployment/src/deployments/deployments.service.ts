import { Deployment, Workspace } from '@database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { QueryDeploymentsDto } from './dto/query-deployments-dto';
import { CreateDeploymentDto } from './dto/create-deployment-dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DeploymentsService {
  constructor(
    @InjectModel(Deployment)
    private deploymentRepository: typeof Deployment
  ) {}

  create(createDeploymentDto: CreateDeploymentDto) {
    return this.deploymentRepository.create(createDeploymentDto);
  }

  async findById(id: string) {
    const deployment = await this.deploymentRepository.findByPk(id, {
      include: [Workspace],
    });
    if (!deployment) {
      throw new NotFoundException('No deployment with given id was found');
    }
    return deployment;
  }

  find(query: QueryDeploymentsDto) {
    const offset = (query.page - 1) * query.pageSize;
    const whereClause = query.status
      ? {
          status: query.status,
        }
      : {};
    return this.deploymentRepository.findAndCountAll({
      where: whereClause,
      limit: query.pageSize,
      offset,
      order: [['createdAt', 'DESC']],
    });
  }
}
