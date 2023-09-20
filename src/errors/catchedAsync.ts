import { Request, Response, NextFunction } from "express";

const catchAsync = (fn: (req: Request, res: Response) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res)
      .then((data) => {
        // Si la promesa se resuelve correctamente, puedes enviar una respuesta aquí
        res.json(data);
      })
      .catch((err) => {
        // Si la promesa se rechaza, pasa el error a Express para que lo maneje
        next(err);
      });
  };
};

export default catchAsync;
