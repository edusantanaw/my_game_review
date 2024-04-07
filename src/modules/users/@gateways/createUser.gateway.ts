import { LoadByEmailRepository } from 'src/modules/@gateways/loadByEmail.gateway';
import { UserEntity } from '../entity/user.entity';
import { CreateGateway } from 'src/modules/@gateways/create.gateway';

export abstract class CreateUserGatewayAbs
  implements LoadByEmailRepository<UserEntity>, CreateGateway<UserEntity>
{
  loadByEmail: (email: string) => Promise<UserEntity>;
  create: (data: UserEntity) => Promise<UserEntity>;
}
