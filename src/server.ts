import express from "express";
import router from "./routes";
import setMiddlewares from "./config/setMiddlewares";

const app = express();

setMiddlewares(app);

app.use(router);

export default app;
