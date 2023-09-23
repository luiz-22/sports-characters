import app from "./src/server";
import { sequelize } from "./src/db/sequelize/db";
import { envs } from "./src/config/envs";

sequelize
  .authenticate() // Prueba la conexión a la base de datos
  .then(() => {
    console.log("Conexión a la base de datos establecida.");
    app.listen(3000, () => {
      console.log("Escuchando en puerto 3000");
    });
  })
  .catch((error: Error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
