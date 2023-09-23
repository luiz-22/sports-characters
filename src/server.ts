import express, { Request, Response, NextFunction } from "express";
import { resError } from "./utils";
import router from "./routes";
import setMiddlewares from "./config/setMiddlewares";

const app = express();

setMiddlewares(app);

app.use(router);

// Ruta no encontrada
app.use((req, res) => {
  res.status(500);
  resError(res, res.statusCode, "Ruta no encontrada");
});

// Piso el manejador de errores de Express
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  const message = err.message || "Internal Server Error";
  resError(res, res.statusCode, message);
});

export default app;
