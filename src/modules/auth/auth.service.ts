import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../users/entity/user.entity';
import { DomainException } from 'src/shared/exceptions/domain.exception';

abstract class LoadByEmailRepository<T> {
  abstract loadByEmail(email: string): Promise<T | null>;
}

abstract class EncrypterCompare {
  abstract compare(encrypted: string, value: string): Promise<boolean>;
}

abstract class GenerateAccessToken<T> {
  abstract generate(payload: T): Promise<string>;
}

@Injectable()
export class AuthService {
  constructor(
    protected userRepository: LoadByEmailRepository<UserEntity>,
    protected encrypter: EncrypterCompare,
    protected tokenGenerator: GenerateAccessToken<string>,
  ) {}

  async auth(email: string, password: string) {
    const user = await this.userRepository.loadByEmail(email);
    if (!user) throw new NotFoundException('Usuario não encontrado!');
    const isPassEquals = await this.encrypter.compare(user.password, password);
    if (!isPassEquals) throw new DomainException('E-mail / senha invalidos!');
    const accessToken = await this.tokenGenerator.generate(
      `${user.id}:${user.email}`,
    );
    return {
      accessToken,
      user: user.id,
    };
  }
}
