import { Character } from "../index";

const getCharacters = async () => {
  return await Character.find();
};

const getCharacterByName = async (name: string) => {
  return await Character.find({ name });
};

export const charactersService = {
  getCharacters,
  getCharacterByName,
};
