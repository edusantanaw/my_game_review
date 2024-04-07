import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'reflect-metadata';
import entities from 'src/infra/entities';

const PGHOST = process.env.PGHOST;
const PGDATABASE = process.env.PGDATABASE;
const PGUSER = process.env.PGUSER;
const PGPASSWORD = process.env.PGPASSWORD;
const PGPORT = process.env.PGPORT;

export const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: PGHOST,
  port: Number(PGPORT),
  username: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  synchronize: true,
  logging: false,
  entities: [...entities],
  migrations: [],
  subscribers: [],
};
