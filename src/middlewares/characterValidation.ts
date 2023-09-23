import { Request, Response, NextFunction } from "express";
import { validationResult, check } from "express-validator";

const characterValidation = [
  check("name").notEmpty().withMessage("The name is missing."),
  check("gender")
    .notEmpty()
    .withMessage("The gender is missing.")
    .isIn(["Male", "Female"])
    .withMessage("Gender must be Male or Female."),
  check("age")
    .notEmpty()
    .withMessage("The age is missing.")
    .isInt({ min: 1 })
    .withMessage("The age must be greater than zero."),
  check("height")
    .notEmpty()
    .withMessage("The height is missing.")
    .isFloat({ min: 0.01 })
    .withMessage("The height must be greater than 0."),
  check("image").notEmpty().withMessage("The image is missing."),
  check("country").notEmpty().withMessage("The country is missing."),
  check("sports")
    .notEmpty()
    .withMessage("The sport is missing.")
    .isArray()
    .withMessage("Sports must be an array."),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    next();
  },
];

export default characterValidation;
