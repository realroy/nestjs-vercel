import { NestFactory, Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import bodyParser from 'body-parser';
import { Logger } from 'nestjs-pino';
import helmet from 'helmet';

import { AppModule } from './app.module.js';
import { setupSwagger } from './swagger.js';
import { corsOptionsDelegate } from './cors-options-delegate.js';

import type { EnvironmentVariables } from './config/env.type.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<EnvironmentVariables>);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'api/',
  });

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.useLogger(app.get(Logger));

  app.use(helmet());

  app.enableCors(
    configService.get('NODE_ENV') === 'production'
      ? corsOptionsDelegate
      : undefined,
  );

  setupSwagger(app, configService);

  await app.listen(configService.get('PORT'));
}

bootstrap();
