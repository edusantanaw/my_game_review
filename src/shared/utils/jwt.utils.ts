import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from '../constants/environments';
import { GenerateAccessToken } from 'src/modules/@utils/jwt.utils';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtUtil implements GenerateAccessToken<string> {
  private readonly jwtService = new JwtService();

  generate(payload: string) {
    return this.jwtService.signAsync(payload, { secret: JWT_SECRET });
  }

  verify(token: string) {
    return this.jwtService.verify(token, { secret: JWT_SECRET });
  }
}
