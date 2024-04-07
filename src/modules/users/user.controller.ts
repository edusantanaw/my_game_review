import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserService } from './createUser.service';
import { CreateUserValidation } from './validation/createUser.validation';

@Controller('/api/user')
export class UserController {
  constructor(protected createUserService: CreateUserService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: CreateUserValidation) {
    const user = await this.createUserService.create(data);
    return user;
  }
}
