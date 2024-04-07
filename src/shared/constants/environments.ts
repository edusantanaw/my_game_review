import * as dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = Number(process.env.ENVIRONMENT ?? 0);

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

export { ENVIRONMENT, PORT, BASE_URL };
