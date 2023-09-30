// import { countriesService } from "../services"; // Sin ORM
//import { countriesService } from "../db/sequelize/services"; // Sequelize
import { countriesService } from "../db/mongoose/services/countriesService"; // Mongoose
import { Request, Response } from "express";
import { response } from "../utils";

const getCountries = async (req: Request, res: Response) => {
  const countries = await countriesService.getCountries();
  response(res, 200, countries);
};

export const countriesController = { getCountries };
