import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { randomUUID } from 'node:crypto';

import {
  type EnvironmentVariables,
  envConfigulation,
  validate,
} from './config/index.js';
import { HealthModule } from './modules/health/health.module.js';
import { TodoListModule } from './modules/todo-list/todo-list.module.js';
import { CommonModule } from './common/common.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      validate,
      load: [envConfigulation],
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => {
        return {
          pinoHttp: {
            transport:
              configService.get('NODE_ENV') !== 'production'
                ? { target: 'pino-pretty' }
                : undefined,
            level:
              configService.get('NODE_ENV') !== 'production' ? 'debug' : 'info',
            genReqId: (request) =>
              request.headers['x-correlation-id'] || randomUUID(),
          },
        };
      },
    }),
    HealthModule,
    TodoListModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
