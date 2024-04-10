/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DomainSchemaExceptionFilter } from 'src/shared/swagger/deafultSchemaResponse';
import { CreateUserService } from './createUser.service';
import { CreateUserValidation } from './validation/createUser.validation';
import { AuthGuard } from 'src/shared/guards/auth.guard';

@Controller('/api/user')
@ApiTags('user')
@ApiResponse(DomainSchemaExceptionFilter)
@UseGuards(AuthGuard)
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
