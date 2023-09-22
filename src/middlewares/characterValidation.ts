import { Request, Response, NextFunction } from "express";

// Define un tipo personalizado que extiende Request para incluir la propiedad 'errors'
declare global {
  namespace Express {
    interface Request {
      errors: string[];
    }
  }
}

const initValidation = (req: Request, res: Response, next: NextFunction) => {
  req.errors = [];
  next();
};

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) req.errors.push("Falta el username");
  if (username && username.length < 6)
    req.errors.push("El username debe tener un tamaño de 6 caracteres mínimo");
  next();
};
