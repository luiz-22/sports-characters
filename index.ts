import app from "./src/server";
import { sequelize } from "./src/db/sequelize/db";
import { seedCountries } from "./src/db/sequelize/load-data";
import { Country } from "./src/db/sequelize/models/Country";

// Sin ORM
// app.listen(3000, () => {
//   console.log("Listening on port 3000.");
// });

// Conexión con Sequelize
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database established.");

    // Elimina todas las tablas existentes y las vuelve a crear
    return sequelize.sync({ force: true });
  })
  .then(async () => {
    console.log("All tables have been synchronized.");
    
    // Ejecuta la función para llenar la tabla Country con datos del JSON
    await seedCountries();

    app.listen(3000, () => {
      console.log("Listening on port 3000.");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
