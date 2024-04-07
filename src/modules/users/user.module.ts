import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserService } from './createUser.service';
import { GatewayModule } from 'src/infra/gateway/gateway.module';
import { UtilModule } from 'src/shared/utils/utils.module';
import { CreateUserGatewayAbs } from './@gateways/createUser.gateway';
import { GenerateHashAbs } from '../@utils/encrypter.utils';

@Module({
  imports: [UtilModule, GatewayModule],
  providers: [
    CreateUserService,
    { provide: CreateUserGatewayAbs, useClass: GatewayModule },
    { provide: GenerateHashAbs, useClass: UtilModule },
  ],
  controllers: [UserController],
})
export class UserModule {}
