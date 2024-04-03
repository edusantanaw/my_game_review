import { Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserService } from './createUser.service';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('/api/user')
export class UserController {
  constructor(protected createUserService: CreateUserService) {}

  @Post()
  @HttpCode(201)
  async create(data: CreateUserDto) {
    const user = await this.createUserService.create(data);
    return user;
  }
}
