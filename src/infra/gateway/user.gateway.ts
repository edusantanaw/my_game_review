import { UserEntity } from './../../modules/users/entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import UserPersistenceEntity from '../entities/user.entity';
import { UserDataMapper } from './dataMappers/user.dataMapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserGateway {
  readonly repository: Repository<UserPersistenceEntity>;
  readonly dataMapper = new UserDataMapper();
  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(UserPersistenceEntity);
  }

  async create(userEntity: UserEntity) {
    const userPersistence = await this.repository.save(
      this.dataMapper.toPersistence(userEntity),
    );
    return this.dataMapper.toEntity(userPersistence);
  }

  async loadByEmail(email: string) {
    console.log(1);
    const user = await this.repository.findOne({ where: { email } });
    console.log(user);
    return user ? this.dataMapper.toEntity(user) : null;
  }

  async loadById(id: string) {
    const userPersistence = await this.repository.findOne({ where: { id } });
    if (!userPersistence) return null;
    console.log(userPersistence);
    return this.dataMapper.toEntity(userPersistence);
  }
}
