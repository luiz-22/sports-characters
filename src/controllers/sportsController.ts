import { sportsService } from "../services";
import { Request, Response } from "express";
import { response } from "../utils";

const getSports = async (req: Request, res: Response) => {
  const sports = await sportsService.getSports();
  response(res, 200, sports);
};

export const sportsController = { getSports };
