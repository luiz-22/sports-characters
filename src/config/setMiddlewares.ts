import express from "express";
import morgan from "morgan";

const setMiddlewares = (app: express.Express) => {
  app.use(express.json());
  app.use(morgan("dev"));
};

export default setMiddlewares;
