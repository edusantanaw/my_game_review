import UserPersistenceEntity from 'src/infra/entities/user.entity';
import { UserEntity } from 'src/modules/users/entity/user.entity';
import { Roles } from 'src/shared/enums/roles';

interface IDataMapper<Entity, Persistence> {
  toPersistence: (data: Entity) => Persistence;
  toEntity: (data: Persistence) => Entity;
}

export class UserDataMapper
  implements IDataMapper<UserEntity, UserPersistenceEntity>
{
  toPersistence(data: UserEntity): UserPersistenceEntity {
    return {
      id: data.id,
      createdAt: data.createdAt,
      deleted: data.deleted ? 1 : 0,
      email: data.email,
      updatedAt: data.updatedAt,
      name: data.name,
      password: data.password,
      roles: JSON.stringify(data.roles),
    };
  }
  toEntity(data: UserPersistenceEntity): UserEntity {
    return {
      id: data.id,
      createdAt: data.createdAt,
      deleted: data.deleted === 1,
      email: data.email,
      updatedAt: data.updatedAt,
      name: data.name,
      password: data.password,
      roles: JSON.parse(data.roles) as Roles[],
    };
  }
}
