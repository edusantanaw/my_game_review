import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/api')
export class AuthController {
  constructor(protected authService: AuthService) {}

  @Post('/auth')
  async auth(@Body() body: { email: string; password: string }) {
    const auth = await this.authService.auth(body.email, body.password);
    return auth;
  }
}
