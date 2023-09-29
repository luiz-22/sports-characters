import { sequelize } from "./db";
import { seedCountries, seedSports, seedCharacters } from "./load-data";

const sequelizeConn = async (appListen: any) => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database established.");

    // Elimina todas las tablas existentes y las vuelve a crear
    await sequelize.sync({ force: true });

    console.log("All tables have been synchronized.");

    // Ejecuta la función para llenar la tabla Country y Sport con datos del JSON
    await seedCountries();
    await seedSports();
    await seedCharacters();

    appListen;
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export default sequelizeConn;
