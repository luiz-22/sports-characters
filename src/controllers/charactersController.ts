import { catchAsync } from "../errors";
import ClientError from "../errors/errors";
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

const getCharacterByGender = async (req: Request, res: Response) => {
  const { gender } = req.query;
  let characters;

  if (gender && typeof gender === "string") {
    characters = await charactersService.getCharacterByGender(gender);
  } else {
    throw new ClientError("Error in filtering by gender.", 400);
  }

  response(res, 200, characters);
};

const getCharacterByCountry = async (req: Request, res: Response) => {
  const { country } = req.query;
  let characters;

  if (country && typeof country === "string") {
    characters = await charactersService.getCharacterByCountry(country);
  } else {
    throw new ClientError("Error in filtering by country.", 400);
  }

  response(res, 200, characters);
};

const getCharacterBySport = async (req: Request, res: Response) => {
  const { sport } = req.query;
  let characters;

  if (sport && typeof sport === "string") {
    characters = await charactersService.getCharacterBySport(sport);
  } else {
    throw new ClientError("Error in filtering by sport.", 400);
  }

  response(res, 200, characters);
};

const createCharacter = async (req: Request, res: Response) => {
  const character = await charactersService.createCharacter();
  response(res, 200, character);
};

export const charactersController = {
  getCharacters: catchAsync(getCharacters),
  getCharacterById: catchAsync(getCharacterById),
  getCharacterByGender: catchAsync(getCharacterByGender),
  getCharacterByCountry: catchAsync(getCharacterByCountry),
  getCharacterBySport: catchAsync(getCharacterBySport),
  createCharacter,
};
