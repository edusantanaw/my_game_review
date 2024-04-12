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
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean = false;
  roles: Roles[] = [];

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
