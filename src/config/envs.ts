import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

export const envs = {
  PGHOST,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
  PGPORT,
};
