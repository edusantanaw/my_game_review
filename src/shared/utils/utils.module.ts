import { Module } from '@nestjs/common';
import { EncrypterUtil } from './encrypter';
import { JwtUtil } from './jwt.utils';

@Module({
  providers: [EncrypterUtil, JwtUtil],
  exports: [EncrypterUtil, JwtUtil],
})
export class UtilModule {}
