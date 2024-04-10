import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from './auth.guard';

@Injectable()
export class RolesGuard extends AuthGuard implements CanActivate {
  constructor(protected roles: string[]) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    await this.validate(request);
    const userRoles = request['userRoles'] as string[];
    for (const item of this.roles) {
      if (userRoles.includes(item)) return true;
    }
    throw new ForbiddenException();
  }
}
