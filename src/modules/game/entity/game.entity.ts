import { randomUUID } from 'node:crypto';

type Data = {
  id?: string;
  name: string;
  publisher: string;
  categories: string[];
  release: string | Date;
  deleted?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export class GameEntity {
  readonly id: string;
  name: string;
  publisher: string;
  categories: string[];
  release: Date;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Data) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.publisher = data.publisher;
    this.categories = data.categories;
    this.release = new Date(data.release);
    this.deleted = !!data.deleted;
    this.createdAt = new Date(data.createdAt ?? new Date());
    this.updatedAt = new Date(data.updatedAt ?? new Date());
  }
}
