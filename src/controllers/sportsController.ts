// import { sportsService } from "../services"; // Sin ORM
// import { sportsService } from "../db/sequelize/services"; // Sequelize
import { sportsService } from "../db/mongoose/services/sportsService";
import { Request, Response } from "express";
import { response } from "../utils";

const getSports = async (req: Request, res: Response) => {
  const sports = await sportsService.getSports();
  response(res, 200, sports);
};

export const sportsController = { getSports };
