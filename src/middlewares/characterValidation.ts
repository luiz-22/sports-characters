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

// const validateId = (req: Request, res: Response, next: NextFunction) => {
//   const { id } = req.body;
//   if (!id) req.errors.push("The id is missing.");
//   next();
// };

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) req.errors.push("The name is missing.");
  next();
};

const validateGender = (req: Request, res: Response, next: NextFunction) => {
  const { gender } = req.body;  
  if (!gender) req.errors.push("The gender is missing.");
  if (gender && (gender !== "Male" && gender !== "Female"))
    req.errors.push("Gender must be Male or Female.");
  next();
};

const validateAge = (req: Request, res: Response, next: NextFunction) => {
  const { age } = req.body;
  if (!age) req.errors.push("The age is missing.");
  if (parseInt(age) < 1) req.errors.push("The age must be greater than zero.");
  next();
};

const validateHeight = (req: Request, res: Response, next: NextFunction) => {
  const { height } = req.body;
  if (!height) req.errors.push("The height is missing.");
  if (parseInt(height) < 1)
    req.errors.push("The height must be greater than zero.");
  next();
};

const validateImage = (req: Request, res: Response, next: NextFunction) => {
  const { image } = req.body;
  if (!image) req.errors.push("The image is missing.");
  next();
};

const validateCountry = (req: Request, res: Response, next: NextFunction) => {
  const { country } = req.body;
  if (!country) req.errors.push("The country is missing.");
  next();
};

const validateSports = (req: Request, res: Response, next: NextFunction) => {
  const { sports } = req.body;
  if (!sports) req.errors.push("The sport is missing.");
  next();
};

const validateErrors = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.errors);
  if (req.errors.length) {
    res.status(400).json(req.errors);
  } else {
    next();
  }
};

const characterValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  initValidation(req, res, () => {
    validateName(req, res, () => {
      validateGender(req, res, () => {
        validateAge(req, res, () => {
          validateHeight(req, res, () => {
            validateImage(req, res, () => {
              validateCountry(req, res, () => {
                validateSports(req, res, () => {
                  validateErrors(req, res, next);
                });
              });
            });
          });
        });
      });
    });
  });
};

export default characterValidation;
