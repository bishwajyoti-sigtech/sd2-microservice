import * as Joi from 'joi';

/**
 * @description The schema of the environment variables that are needed by the Nest.js
 */
type EnvValidationSchema = {
  NODE_ENV: 'development' | 'production' | 'test' | 'local';
  PORT: number;
  NX_DATABASE_URI: string;
};

export const envValidation = Joi.object<EnvValidationSchema>({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'local')
    .default('local'),
  PORT: Joi.number().default(3000),
  NX_DATABASE_URI: Joi.string().uri().required(),
});
