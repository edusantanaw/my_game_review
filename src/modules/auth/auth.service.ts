import { Injectable, NotFoundException } from '@nestjs/common';
import { DomainException } from 'src/shared/exceptions/domain.exception';
import { LoadByEmailRepository } from '../@gateways/loadByEmail.gateway';
import { UserEntity } from '../users/entity/user.entity';
import { EncrypterCompare } from '../@gateways/encrypter.gateway';
import { GenerateAccessToken } from '../@gateways/jwt.gateway';

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
    if (!isPassEquals) throw new DomainException('E-mail / senha invalido!');
    const accessToken = await this.tokenGenerator.generate(
      `${user.id}:${user.email}`,
    );
    return {
      accessToken,
      user: user.id,
    };
  }
}
