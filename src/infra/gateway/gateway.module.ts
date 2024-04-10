import { Module } from '@nestjs/common';
import { UserGateway } from './user.gateway';

@Module({
  imports: [],
  providers: [{ provide: 'userRepository', useClass: UserGateway }],
  exports: [{ provide: 'userRepository', useClass: UserGateway }],
})
export class GatewayModule {}
