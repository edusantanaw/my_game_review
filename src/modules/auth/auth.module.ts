import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UtilModule } from 'src/shared/utils/utils.module';
import { GatewayModule } from 'src/infra/gateway/gateway.module';
import { LoadByEmailRepository } from '../@gateways/loadByEmail.gateway';
import { UserEntity } from '../users/entity/user.entity';
import { EncrypterCompare } from '../@utils/encrypter.utils';
import { GenerateAccessToken } from '../@utils/jwt.utils';

@Module({
  imports: [UtilModule, GatewayModule],
  providers: [
    AuthService,
    { provide: LoadByEmailRepository<UserEntity>, useClass: GatewayModule },
    { provide: EncrypterCompare, useClass: UtilModule },
    { provide: GenerateAccessToken, useClass: UtilModule },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
