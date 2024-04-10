import { Module } from '@nestjs/common';
import { EncrypterUtil } from './encrypter';
import { JwtUtil } from './jwt.utils';

@Module({
  providers: [
    { provide: 'encrypter', useClass: EncrypterUtil },
    { provide: 'jwtService', useClass: JwtUtil },
  ],
  exports: [
    { provide: 'encrypter', useClass: EncrypterUtil },
    { provide: 'jwtService', useClass: JwtUtil },
  ],
})
export class UtilModule {}
