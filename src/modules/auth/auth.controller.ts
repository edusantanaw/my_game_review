import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthValidation } from './validation/auth.validation';

@Controller('/api')
export class AuthController {
  constructor(protected authService: AuthService) {}

  @Post('/auth')
  async auth(@Body() data: AuthValidation) {
    const auth = await this.authService.auth(data.email, data.password);
    return auth;
  }
}
