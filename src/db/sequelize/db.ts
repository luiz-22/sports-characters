import { Sequelize } from "sequelize";
import { initCharacterModel, Character } from "./models/Character";
import { initCountryModel, Country } from "./models/Country";
import { initSportModel, Sport } from "./models/Sport";

// Configura la conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(
  "postgres://usuario:contraseña@localhost:5432/nombre_basedatos",
  {
    dialect: "postgres", // Usa el dialecto 'postgres' para PostgreSQL
    host: "localhost", // Cambia esto al host de tu base de datos
    port: 5432, // Cambia esto al puerto de tu base de datos PostgreSQL
    logging: false, // Puedes cambiar esto para habilitar/desabilitar el registro de consultas SQL
  }
);

// Inicializa los modelos
initCharacterModel(sequelize);
initCountryModel(sequelize);
initSportModel(sequelize);

// Define la relación N:M entre Character y Sport
Character.belongsToMany(Sport, { through: "CharacterSport" });
Sport.belongsToMany(Character, { through: "CharacterSport" });

// Sincroniza los modelos con la base de datos (esto crea las tablas si no existen)
sequelize.sync();

// Exporta todos los modelos y objetos necesarios
export { sequelize, Character, Country, Sport };
