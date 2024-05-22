import { Module, ModuleMetadata } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

import { HealthController } from './health.controller.js';

export const imports = [
  TerminusModule,
  HttpModule,
] satisfies ModuleMetadata['imports'];

@Module({
  imports,
  controllers: [HealthController],
})
export class HealthModule {}
