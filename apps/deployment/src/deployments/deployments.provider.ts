import { Deployment } from '@database';

export const deploymentsProviders = [
  {
    provide: 'DEPLOYMENTS_REPOSITORY',
    useValue: Deployment,
  },
];
