import { Character } from "../index";
import ClientError from "../../../errors/errors";

const getCharacters = async () => {
  return await Character.find();
};

const getCharacterByName = async (name: string) => {
  return await Character.find({ name });
};

const getCharacterById = async (id: number) => {
  const character = Character.findById(id);
  if (!character) throw new ClientError("Invalid ID", 400);
  return character;
};

const getCharacterByGender = async (gender: string) => {
  return await Character.find({ gender });
};

const getCharacterByCountry = async (country: string) => {
  return await Character.find({ "country.name": country });
};

export const charactersService = {
  getCharacters,
  getCharacterByName,
  getCharacterById,
  getCharacterByGender,
  getCharacterByCountry
};
