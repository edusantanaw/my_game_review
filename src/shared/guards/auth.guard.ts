import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtUtil } from '../utils/jwt.utils';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  jwtService = new JwtUtil();
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    return this.validate(request);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async validate(request: Request) {
    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException();
    try {
      const payload = await this.jwtService.verify(token);
      const [id, roles] = payload.split(':');
      request['userId'] = id;
      request['userRoles'] = roles.split(',');
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
