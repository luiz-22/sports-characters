import { countriesService } from "../services";
import { Request, Response } from "express";
import { response } from "../utils";

const getCountries = async (req: Request, res: Response) => {
  const countries = await countriesService.getCountries();
  response(res, 200, countries);
};

export const countriesController = { getCountries };
