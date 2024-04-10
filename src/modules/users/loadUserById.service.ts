import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LoadByIdRepository } from '../@gateways/loadById.gateway';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class LoadUserByIdService {
  constructor(
    @Inject('userRepository')
    protected userRepository: LoadByIdRepository<UserEntity>,
  ) {}

  async loadById(id: string) {
    const user = await this.userRepository.loadById(id);
    if (!user) throw new NotFoundException('Usuario não encontrado');
    return user;
  }
}
