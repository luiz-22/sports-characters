import { Sequelize } from "sequelize";
import { envs } from "../../config/envs";
import { initCharacterModel, Character } from "./models/Character";
import { initCountryModel, Country } from "./models/Country";
import { initSportModel, Sport } from "./models/Sport";

const sequelize = new Sequelize(
  `postgresql://${envs.PGUSER}:${envs.PGPASSWORD}@${envs.PGHOST}:${envs.PGPORT}/${envs.PGDATABASE}`,
  {
    logging: false,
  }
);

initCharacterModel(sequelize);
initCountryModel(sequelize);
initSportModel(sequelize);

sequelize.sync();

export { sequelize, Character, Country, Sport };
