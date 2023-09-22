import { catchAsync } from "../errors";
import { charactersService } from "../services";
import { Request, Response } from "express";
import { response } from "../utils";

const getCharacters = async (req: Request, res: Response) => {
  const { name } = req.query;
  const characters =
    name && typeof name === "string" // Me pide que compruebe si es un string
      ? await charactersService.getCharacterByName(name)
      : await charactersService.getCharacters();
  response(res, 200, characters);
};

const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const character = await charactersService.getCharacterById(parseInt(id));
  response(res, 200, character);
};

const createCharacter = async (req: Request, res: Response) => {
  const character = await charactersService.createCharacter();
  response(res, 200, character);
};

export const charactersController = {
  getCharacters: catchAsync(getCharacters),
  getCharacterById: catchAsync(getCharacterById),
  createCharacter,
};
