import { NODE_ENVS } from './env.constant.js';

import type { EnvironmentVariables, NodeEnv } from './env.type.js';

export function envConfigulation() {
  const NODE_ENV = process.env.NODE_ENV as NodeEnv;

  return {
    ...process.env,
    NODE_ENV: NODE_ENVS.includes(NODE_ENV) ? NODE_ENV : 'development',
    PORT: parseInt(process.env.PORT, 10) || 3000,
    SWAGGER_PATH: process.env.SWAGGER_PATH || 'docs',
  } satisfies Partial<EnvironmentVariables>;
}
