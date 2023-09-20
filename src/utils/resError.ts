import { Response } from "express";

const resError = (res: Response, statusCode: number, message: string) => {
  res.status(statusCode).json({
    error: true,
    message,
  });
};

export default resError;
