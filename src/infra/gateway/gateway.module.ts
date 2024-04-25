import { Module } from '@nestjs/common';
import { UserGateway } from './user.gateway';
import { GameGateway } from './game.gateway';

@Module({
  imports: [],
  providers: [
    { provide: 'userRepository', useClass: UserGateway },
    { provide: 'gameRepository', useClass: GameGateway },
  ],
  exports: [
    { provide: 'userRepository', useClass: UserGateway },
    { provide: 'gameRepository', useClass: GameGateway },
  ],
})
export class GatewayModule {}
