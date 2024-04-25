import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateGameService } from './createGame.service';
import { CreateGameValidation } from './validation/createGame.validation';

@Controller('api/game')
export class GameController {
  constructor(private readonly createGameService: CreateGameService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: CreateGameValidation) {
    const game = await this.createGameService.create(data);
    return game;
  }
}
