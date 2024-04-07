import { randomUUID } from 'node:crypto';
import { Roles } from 'src/shared/enums/roles';

type Data = {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deleted?: boolean;
  roles?: Roles[];
};

export class UserEntity {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deleted: boolean = false;
  readonly roles: Roles[] = [];

  constructor(data: Data) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = new Date(data.createdAt ?? new Date());
    this.updatedAt = new Date(data.updatedAt ?? new Date());
    this.deleted = !!data.deleted;
    this.roles = data.roles ?? [Roles.USER];
  }
}
