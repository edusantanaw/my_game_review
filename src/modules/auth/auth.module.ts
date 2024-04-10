import { Module } from '@nestjs/common';
import { GatewayModule } from 'src/infra/gateway/gateway.module';
import { UtilModule } from 'src/shared/utils/utils.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UtilModule, GatewayModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
