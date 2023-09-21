import { catchAsync } from "../errors";
import { charactersService } from "../services";
import { Request, Response } from "express";
import { response } from "../utils";

const getCharacters = async (req: Request, res: Response) => {
  const { name } = req.params;
  const characters = name
    ? await charactersService.getCharacterByName(name)
    : await charactersService.getCharacters();
  response(res, 200, characters);
};

const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const character = await charactersService.getCharacterById(parseInt(id));
  response(res, 200, character);
};

export const charactersController = {
  getCharacters: catchAsync(getCharacters),
  getCharacterById: catchAsync(getCharacterById),
};
