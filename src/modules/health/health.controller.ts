import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';

@ApiTags('health')
@Controller({
  version: VERSION_NEUTRAL,
  path: 'health',
})
export class HealthController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.healthCheckService.check([]);
  }
}
