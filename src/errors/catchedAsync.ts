import { Request, Response, NextFunction } from "express";

const catchAsync = (fn: (req: Request, res: Response) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Si la promesa se rechaza, pasa el error a Express para que lo maneje
    fn(req, res).catch((err) => next(err));
  };
};

export default catchAsync;
