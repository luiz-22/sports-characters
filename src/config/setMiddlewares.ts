import { Request, Response, NextFunction, Express, json } from "express";
import morgan from "morgan";
import { resError } from "../utils";

const setMiddlewares = (app: Express) => {
  app.use(json());
  app.use(morgan("dev"));
};

export default setMiddlewares;
