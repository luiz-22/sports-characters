"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
//import sequelizeConn from "./src/db/sequelize";
// Sin ORM y Mongoose
server_1.default.listen(3000, () => {
    console.log("Listening on port 3000.");
});
// Conexión con Sequelize
// sequelizeConn(
//   app.listen(3000, () => {
//     console.log("Listening on port 3000.");
//   })
// );
