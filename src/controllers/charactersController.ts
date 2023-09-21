import { charactersService } from "../services";
import { Request, Response } from "express";
import { response } from "../utils";

const getCharacters = async (req: Request, res: Response) => {
  const sports = await charactersService.getCharacters();
  response(res, 200, sports);
};

export const charactersController = { getCharacters };
