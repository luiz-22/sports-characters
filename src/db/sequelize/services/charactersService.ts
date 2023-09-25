import { Character, Country } from "../db";
import ClientError from "../../../errors/errors";

const getCharacters = async () => {
  return await Character.findAll();
};

const getCharacterByName = async (name: string) => {
  return await Character.findAll({
    where: { name },
  });
};

const getCharacterById = async (id: number) => {
  const character = Character.findByPk(id);
  if (!character) throw new ClientError("Invalid ID", 400);
  return character;
};

const getCharacterByGender = async (gender: string) => {
  return await Character.findAll({
    where: { gender },
  });
};

const getCharacterByCountry = async (country: string) => {
  const countryInstance = await Country.findOne({
    where: { name: country },
  });

  if (!countryInstance) {
    return [];
  }

  return await Character.findAll({
    where: { CountryId: countryInstance.dataValues.id },
  });
};

export const charactersService = {
  getCharacters,
  getCharacterByName,
  getCharacterById,
  getCharacterByGender,
  getCharacterByCountry,
  // getCharacterBySport,
  // createCharacter,
  // updateCharacter,
  // deleteCharacter,
};
