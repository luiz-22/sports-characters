import { Request, Response, NextFunction, Express, json } from "express";
import morgan from "morgan";
import { resError } from "../utils";

const setMiddlewares = (app: Express) => {
  app.use(json());
  app.use(morgan("dev"));

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Establece el código de estado en la respuesta
    res.status(400); // Puedes definir un código de estado adecuado aquí
    console.log("ZZZ");
    const message = err.message || "Internal Server Error"; // Mensaje por defecto
    // Utiliza resError para enviar una respuesta personalizada
    resError(res, res.statusCode, message);
  });
};

export default setMiddlewares;
