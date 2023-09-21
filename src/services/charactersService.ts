import { characters } from "../data/index";
import ClientError from "../errors/errors";

const getCharacters = async () => {
  console.log(characters);
  return characters;
};

const getCharacterByName = async (name: string) => {
  const charactersByName = characters.filter((ch) => (ch.name === name));
  return charactersByName;
};

const getCharacterById = async (id: number) => {
  const character = characters.find((ch) => (ch.id === id));
  if (!character) throw new ClientError("Invalid ID", 400);
  return character;
};

export const charactersService = {
  getCharacters,
  getCharacterByName,
  getCharacterById,
};
