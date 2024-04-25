import { Inject, Injectable } from '@nestjs/common';
import { CreateGameDto } from './dtos/createGame.dto';
import { GameEntity } from './entity/game.entity';
import { CreateGateway } from '../@gateways/create.gateway';

@Injectable()
export class CreateGameService {
  constructor(
    @Inject('gameRepository')
    private readonly gameRepository: CreateGateway<GameEntity>,
  ) {}
  async create(data: CreateGameDto) {
    const game = new GameEntity(data);
    await this.gameRepository.create(game);
    return game;
  }
}
