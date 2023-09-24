import { Sequelize } from "sequelize";
import { envs } from "../../config/envs";
import { initCharacterModel, Character } from "./models/Character";
import { initCountryModel, Country } from "./models/Country";
import { initSportModel, Sport } from "./models/Sport";

// Configura la conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(
  `postgresql://${envs.PGUSER}:${envs.PGPASSWORD}@${envs.PGHOST}:${envs.PGPORT}/${envs.PGDATABASE}`,
  {
    logging: false, // Puedes cambiar esto para habilitar/desabilitar el registro de consultas SQL
  }
);

// Inicializa los modelos
initCharacterModel(sequelize);
initCountryModel(sequelize);
initSportModel(sequelize);

// Define la relación N:M entre Character y Sport
// Character.belongsToMany(Sport, { through: "CharacterSport" });
// Sport.belongsToMany(Character, { through: "CharacterSport" });

// Sincroniza los modelos con la base de datos (esto crea las tablas si no existen)
sequelize.sync();

// Exporta todos los modelos y objetos necesarios
export { sequelize, Character, Country, Sport };
