import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  EncrypterCompare,
  GenerateHashAbs,
} from 'src/modules/@utils/encrypter.utils';

@Injectable()
export class EncrypterUtil implements GenerateHashAbs, EncrypterCompare {
  async generate(value: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(value, salt);
  }

  compare(encrypted: string, value: string): Promise<boolean> {
    return bcrypt.compare(value, encrypted);
  }
}
