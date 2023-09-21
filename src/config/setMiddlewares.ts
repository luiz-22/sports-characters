import express, { NextFunction } from "express";
import morgan from "morgan";
import { resError } from "../utils";

const setMiddlewares = (app: express.Express) => {
  app.use(express.json());
  app.use(morgan("dev"));

  app.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: NextFunction
    ) => {
      // Establece el código de estado en la respuesta
      res.status(400); // Puedes definir un código de estado adecuado aquí

      const message = err.message || "Internal Server Error"; // Mensaje por defecto
      resError(res, res.statusCode, message);

      console.log(err);
    }
  );
};

export default setMiddlewares;
