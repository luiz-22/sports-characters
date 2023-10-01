import app from "./server";
//import sequelizeConn from "./db/sequelize";

// Sin ORM y Mongoose
app.listen(3000, () => {
  console.log("Listening on port 3000.");
});

// Conexión con Sequelize
// sequelizeConn(
//   app.listen(3000, () => {
//     console.log("Listening on port 3000.");
//   })
// );
