import { randomUUID } from 'node:crypto';

type Data = {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deleted: boolean;
};

export class UserEntity {
  protected id: string;
  protected name: string;
  protected email: string;
  protected password: string;
  protected createdAt: Date;
  protected updatedAt: Date;
  protected deleted: boolean = false;

  constructor(data: Data) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
    this.deleted = data.deleted;
  }
}
