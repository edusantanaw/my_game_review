/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserService } from './createUser.service';
import { CreateUserValidation } from './validation/createUser.validation';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DomainSchemaExceptionFilter } from 'src/config/swagger/deafultSchemaResponse';
import { clear } from 'console';

@Controller('/api/user')
@ApiTags('user')
@ApiResponse(DomainSchemaExceptionFilter)
export class UserController {
  constructor(protected createUserService: CreateUserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    schema: {
      example: {
        deleted: false,
        roles: ['USER'],
        id: 'd063e888-f7c4-4d86-aabf-de2a47853bb6',
        name: 'Eduardo Santana',
        email: 'eduardo1@email.com',
        createdAt: '2024-04-10T00:20:32.513Z',
        updatedAt: '2024-04-10T00:20:32.513Z',
      },
    },
  })
  @HttpCode(201)
  async create(@Body() data: CreateUserValidation) {
    const user = await this.createUserService.create(data);
    const { password, ...rest } = user;
    return rest;
  }
}
