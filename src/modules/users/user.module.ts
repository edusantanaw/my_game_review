import { Module } from '@nestjs/common';
import { GatewayModule } from 'src/infra/gateway/gateway.module';
import { UtilModule } from 'src/shared/utils/utils.module';
import { CreateUserService } from './createUser.service';
import { UserController } from './user.controller';
import { LoadUserByIdService } from './loadUserById.service';

@Module({
  imports: [UtilModule, GatewayModule],
  providers: [CreateUserService, LoadUserByIdService],
  controllers: [UserController],
})
export class UserModule {}
