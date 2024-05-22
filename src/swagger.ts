import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import type { INestApplication } from '@nestjs/common';
import type { EnvironmentVariables } from './config';

export function setupSwagger<T = unknown>(
  app: INestApplication<T>,
  configService: ConfigService<EnvironmentVariables, false>,
) {
  const documentBuilder = new DocumentBuilder()
    .setTitle(configService.get('APP_NAME'))
    .setDescription(configService.get('APP_DESCRIPTION'))
    .setVersion(configService.get('APP_VERSION'))
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'accessToken',
    )
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, documentBuilder);
  const swaggerPath = configService.get('SWAGGER_PATH');
  console.log({ swaggerPath });
  SwaggerModule.setup(swaggerPath, app, swaggerDocument, {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
}
