import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entity/user.entity';
import { DomainException } from 'src/shared/exceptions/domain.exception';

abstract class UserRepositoryAbs {
  abstract loadByEmail(email: string): Promise<UserEntity | null>;
  abstract create(data: UserEntity): Promise<UserEntity>;
}

abstract class GenerateHashAbs {
  abstract generate(value: string): Promise<string>;
}

@Injectable()
export class CreateUserService {
  constructor(
    protected userRepository: UserRepositoryAbs,
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
    await this.userRepository.create(user);
    return user;
  }
}
