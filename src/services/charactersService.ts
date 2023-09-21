import { characters } from "../data/index";

const getCharacters = async () => {
  return characters;
};

export const charactersService = { getCharacters };
