import * as dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = Number(process.env.ENVIRONMENT ?? 0);

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const PGHOST = process.env.PGHOST;
const PGDATABASE = process.env.PGDATABASE;
const PGUSER = process.env.PGUSER;
const PGPASSWORD = process.env.PGPASSWORD;
const PGPORT = process.env.PGPORT;
const JWT_SECRET = process.env.JWT_SECRET;

export {
  ENVIRONMENT,
  PORT,
  BASE_URL,
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPORT,
  PGPASSWORD,
  JWT_SECRET,
};
