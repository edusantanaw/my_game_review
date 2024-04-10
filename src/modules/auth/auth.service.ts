import { Inject, Injectable } from '@nestjs/common';
import { DomainException } from 'src/shared/exceptions/domain.exception';
import { LoadByEmailRepository } from '../@gateways/loadByEmail.gateway';
import { UserEntity } from '../users/entity/user.entity';
import { EncrypterCompare } from '../@utils/encrypter.utils';
import { GenerateAccessToken } from '../@utils/jwt.utils';
import { NotFoundException } from 'src/shared/exceptions/notFound.exception';

@Injectable()
export class AuthService {
  constructor(
    @Inject('userRepository')
    protected userRepository: LoadByEmailRepository<UserEntity>,
    @Inject('encrypter')
    protected encrypter: EncrypterCompare,
    @Inject('jwtService')
    protected tokenGenerator: GenerateAccessToken<string>,
  ) {}

  async auth(email: string, password: string) {
    const user = await this.userRepository.loadByEmail(email);
    if (!user) throw new NotFoundException('Usuario não encontrado!');
    const isPassEquals = await this.encrypter.compare(user.password, password);
    if (!isPassEquals) throw new DomainException('E-mail / senha invalido!');
    const accessToken = await this.tokenGenerator.generate(
      `${user.id}:${user.roles.join(',')}`,
    );
    return {
      accessToken,
      user: user.id,
    };
  }
}
