import app from "./src/server";
import { sequelize } from "./src/db/sequelize/db";

// Sin ORM
// app.listen(3000, () => {
//   console.log("Listening on port 3000.");
// });

// Conexión con Sequelize
sequelize
  .authenticate() // Prueba la conexión a la base de datos
  .then(() => {
    console.log("Connection to the database established.");
    // Elimina todas las tablas existentes y las vuelve a crear
    return sequelize.sync({ force: true });
  })
  .then(() => {
    console.log("All tables have been synchronized.");
    app.listen(3000, () => {
      console.log("Listening on port 3000.");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
