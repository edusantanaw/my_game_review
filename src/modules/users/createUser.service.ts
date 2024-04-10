import { Inject, Injectable } from '@nestjs/common';
import { DomainException } from 'src/shared/exceptions/domain.exception';
import { GenerateHashAbs } from '../@utils/encrypter.utils';
import { CreateUserGatewayAbs } from './@gateways/createUser.gateway';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('userRepository')
    protected userRepository: CreateUserGatewayAbs,
    @Inject('encrypter')
    protected encrypter: GenerateHashAbs,
  ) {}
  async create(data: CreateUserDto) {
    const emailAlreadyRegistered = await this.userRepository.loadByEmail(
      data.email,
    );
    if (emailAlreadyRegistered)
      throw new DomainException('E-mail já está em uso!');
    const hashedPass = await this.encrypter.generate(data.password);
    const user = new UserEntity({
      ...data,
      password: hashedPass,
    });
    const created = await this.userRepository.create(user);
    return created;
  }
}
