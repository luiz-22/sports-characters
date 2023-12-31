// import { charactersService } from "../services"; // Sin ORM
// import { charactersService } from "../db/sequelize/services"; // Sequelize
import { charactersService } from "../db/mongoose/services/charactersService"; // Mongoose
import { catchAsync } from "../errors";
import ClientError from "../errors/errors";
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
  const character = await charactersService.getCharacterById(id);
  response(res, 200, character);
};

const getCharacterByGender = async (req: Request, res: Response) => {
  const { gender } = req.params;
  let characters;

  if (gender && typeof gender === "string") {
    characters = await charactersService.getCharacterByGender(gender);
  } else {
    throw new ClientError("Error in filtering by gender.", 400);
  }

  response(res, 200, characters);
};

const getCharacterByCountry = async (req: Request, res: Response) => {
  const { country } = req.params;
  let characters;

  if (country && typeof country === "string") {
    characters = await charactersService.getCharacterByCountry(country);
  } else {
    throw new ClientError("Error in filtering by country.", 400);
  }

  response(res, 200, characters);
};

const getCharacterBySport = async (req: Request, res: Response) => {
  const { sport } = req.params;
  let characters;

  if (sport && typeof sport === "string") {
    characters = await charactersService.getCharacterBySport(sport);
  } else {
    throw new ClientError("Error in filtering by sport.", 400);
  }

  response(res, 200, characters);
};

const createCharacter = async (req: Request, res: Response) => {
  const character = await charactersService.createCharacter(req.body);
  response(res, 200, character);
};

const updateCharacter = async (req: Request, res: Response) => {
  const character = await charactersService.updateCharacter(
    req.params.id,
    req.body
  );
  response(res, 200, character);
};

const deleteCharacter = async (req: Request, res: Response) => {
  const character = await charactersService.deleteCharacter(req.params.id);
  response(res, 200, character);
};

export const charactersController = {
  getCharacters: catchAsync(getCharacters),
  getCharacterById: catchAsync(getCharacterById),
  getCharacterByGender: catchAsync(getCharacterByGender),
  getCharacterByCountry: catchAsync(getCharacterByCountry),
  getCharacterBySport: catchAsync(getCharacterBySport),
  createCharacter: catchAsync(createCharacter),
  updateCharacter: catchAsync(updateCharacter),
  deleteCharacter: catchAsync(deleteCharacter),
};
