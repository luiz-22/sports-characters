import { Sequelize } from "sequelize";
import { envs } from "../../config/envs";
import { initCharacterModel } from "./models/Character";
import { initCountryModel } from "./models/Country";
import { initSportModel } from "./models/Sport";

const sequelize = new Sequelize(
  `postgresql://${envs.PGUSER}:${envs.PGPASSWORD}@${envs.PGHOST}:${envs.PGPORT}/${envs.PGDATABASE}`,
  {
    logging: false,
  }
);

initCharacterModel(sequelize);
initCountryModel(sequelize);
initSportModel(sequelize);

console.log(sequelize);

const { Character, Sport, Country } = sequelize.models;

Character.belongsToMany(Sport, { through: "character_sport" });
Sport.belongsToMany(Character, { through: "character_sport" });

export { sequelize };
