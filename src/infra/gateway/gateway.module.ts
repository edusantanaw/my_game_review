import { Module } from '@nestjs/common';
import { UserGateway } from './user.gateway';

@Module({
  imports: [],
  providers: [UserGateway],
  exports: [UserGateway],
})
export class GatewayModule {}
