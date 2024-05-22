import type { CorsOptionsCallback } from '@nestjs/common/interfaces/external/cors-options.interface';
import type { Request } from 'express';

export function corsOptionsDelegate(
  _req: Request,
  callback: CorsOptionsCallback,
) {
  const corsOptions = { origin: false };
  // Example
  // if (whitelist.indexOf(req.header('Origin')) !== -1) {
  //   corsOptions = { origin: true };
  // } else {
  //   corsOptions = { origin: false };
  // }

  callback(null, corsOptions);
}
