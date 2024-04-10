import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthValidation } from './validation/auth.validation';
import { DomainSchemaExceptionFilter } from 'src/shared/swagger/deafultSchemaResponse';

@Controller('/api')
@ApiTags('auth')
@ApiResponse(DomainSchemaExceptionFilter)
export class AuthController {
  constructor(protected authService: AuthService) {}

  @Post('/auth')
  @ApiResponse({
    status: 200,
    description: 'Autenticação bem sucedida!',
    schema: {
      default: {
        user: '092130129c031293c012cc32c13c',
        accessToken: 'ey1931927837hjdxj7jd8j278cf27183c',
      },
    },
  })
  @HttpCode(200)
  async auth(@Body() data: AuthValidation) {
    const auth = await this.authService.auth(data.email, data.password);
    return auth;
  }
}
