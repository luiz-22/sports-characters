import { Types, ObjectId } from "mongoose";
import { Character, Country, Sport } from "../index";
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

const getCharacterBySport = async (sport: string) => {
  return await Character.find({ "sports.name": sport });
};

const createCharacter = async (character: any) => {
  const country = await Country.findOne({ name: character.country });

  if (!country) throw new ClientError("The country was not found.");

  const sportNames = character.sports;
  const sportPromises = sportNames.map((sportName: string) => {
    return Sport.findOne({ name: sportName });
  });

  const sports = await Promise.all(sportPromises);

  if (!sports.every(Boolean)) {
    throw new ClientError("Some sports were not found.");
  }

  if (!sports) throw new ClientError("The sports was not found.");

  const newCharacter = {
    name: character.name,
    gender: character.gender,
    age: character.age,
    height: character.height,
    image: character.image,
    country: {
      name: character.country,
      flag: country.flag,
    },
    sports: sports.map((sport: any) => {
      return {
        name: sport.name,
        icon: sport.icon,
      };
    }),
  };

  return await Character.create(newCharacter);
};

const updateCharacter = async (id: any, character: any) => {
  // Verifica si id es un número o un ObjectId y conviértelo a ObjectId si es necesario
  const objectId = Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : id;

  const country = await Country.findOne({ name: character.country });

  if (!country) {
    throw new ClientError("The country was not found.");
  }

  const sportNames = character.sports;
  const sportPromises = sportNames.map((sportName: string) => {
    return Sport.findOne({ name: sportName });
  });

  const sports = await Promise.all(sportPromises);

  if (!sports.every(Boolean)) {
    throw new ClientError("Some sports were not found.");
  }

  if (!sports) {
    throw new ClientError("The sports were not found.");
  }

  const updateCharacterData = {
    name: character.name,
    gender: character.gender,
    age: character.age,
    height: character.height,
    image: character.image,
    country: {
      name: character.country,
      flag: country.flag,
    },
    sports: sports.map((sport: any) => ({
      name: sport.name,
      icon: sport.icon,
    })),
  };

  console.log(id);
  console.log(objectId);

  return await Character.replaceOne(
    {
      _id: objectId, // Usa el objectId convertido
    },
    updateCharacterData
  );
};

export const charactersService = {
  getCharacters,
  getCharacterByName,
  getCharacterById,
  getCharacterByGender,
  getCharacterByCountry,
  getCharacterBySport,
  createCharacter,
  updateCharacter,
};
