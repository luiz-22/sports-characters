import { Character, Country, Sport } from "../index";
import ClientError from "../../../errors/errors";

const getCharacters = async () => {
  return await Character.find();
};

const getCharacterByName = async (name: string) => {
  return await Character.find({ name });
};

const getCharacterById = async (id: any) => {
  return await Character.findById(id);
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

  return await Character.replaceOne(
    {
      _id: id,
    },
    updateCharacterData
  );
};

const deleteCharacter = async (id: any) => {
  const result = await Character.deleteOne({ _id: id });

  if (result.deletedCount === 1) {
    return "Character deleted successfully";
  } else {
    return "Character not found or not deleted";
  }
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
  deleteCharacter,
};
