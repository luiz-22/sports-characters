import { Express, json } from "express";
import morgan from "morgan";

const setMiddlewares = (app: Express) => {
  app.use(json());
  app.use(morgan("dev"));
};

export default setMiddlewares;
