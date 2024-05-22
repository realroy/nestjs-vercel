import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsPort,
  IsSemVer,
  IsString,
  ValidateIf,
  isEmpty,
} from 'class-validator';
import { NODE_ENVS } from './env.constant.js';
import { Transform } from 'class-transformer';

export type NodeEnv = (typeof NODE_ENVS)[number];

export class EnvironmentVariables {
  @IsIn(NODE_ENVS)
  NODE_ENV: (typeof NODE_ENVS)[number];

  @IsNumber()
  PORT: number;

  APP_NAME: string;

  APP_DESCRIPTION: string;

  @IsSemVer()
  APP_VERSION: `${number}.${number}.${number}`;

  @IsOptional()
  SWAGGER_PATH: string;

  @IsString()
  JWT_SECRET: string;
}
