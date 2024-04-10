/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { DomainSchemaExceptionFilter } from 'src/shared/swagger/deafultSchemaResponse';
import { CreateUserService } from './createUser.service';
import { CreateUserValidation } from './validation/createUser.validation';
import { LoadUserByIdService } from './loadUserById.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Request as ExpressRequest } from 'express';

@Controller('/api/user')
@ApiTags('user')
export class UserController {
  constructor(
    protected createUserService: CreateUserService,
    protected loadUserByIdService: LoadUserByIdService,
  ) {}

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
  @ApiResponse(DomainSchemaExceptionFilter)
  @HttpCode(201)
  async create(@Body() data: CreateUserValidation) {
    const user = await this.createUserService.create(data);
    const { password, ...rest } = user;
    return rest;
  }

  @Get('/loadByToken')
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: 200,
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
  async loadByToken(@Request() request: ExpressRequest) {
    const userId = request['userId'];
    const user = await this.loadUserByIdService.loadById(userId);
    return user;
  }

  @Get(':id')
  @UseGuards(new RolesGuard(['ADMIN']))
  @ApiResponse({
    status: 200,
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
  async loadUserById(@Param('id') id: string) {
    const user = await this.loadUserByIdService.loadById(id);
    return user;
  }
}
