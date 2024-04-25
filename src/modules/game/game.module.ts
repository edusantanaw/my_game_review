import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { CreateGameService } from './createGame.service';
import { GatewayModule } from 'src/infra/gateway/gateway.module';

@Module({
  imports: [GatewayModule],
  controllers: [GameController],
  providers: [CreateGameService],
})
export class GameModule {}
