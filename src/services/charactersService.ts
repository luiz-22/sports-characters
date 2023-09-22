import { characters, countries, sports } from "../data/index";
import ClientError from "../errors/errors";
const jsonfile = require("jsonfile");
const file = "../sports-characters/src/data/characters.json";

const getCharacters = async () => {
  return characters;
};

const getCharacterByName = async (name: string) => {
  const charactersByName = characters.filter((ch) => ch.name === name);
  return charactersByName;
};

const getCharacterById = async (id: number) => {
  const character = characters.find((ch) => ch.id === id);
  if (!character) throw new ClientError("Invalid ID", 400);
  return character;
};

const getCharacterByGender = async (gender: string) => {
  const charactersByGender = characters.filter((ch) => ch.gender === gender);
  return charactersByGender;
};

const getCharacterByCountry = async (country: string) => {
  const charactersByCountry = characters.filter(
    (ch) => ch.country.name === country
  );
  return charactersByCountry;
};

const getCharacterBySport = async (sport: string) => {
  const charactersBySport = characters.filter((ch) =>
    ch.sports.some((s) => s.name === sport)
  );
  return charactersBySport;
};

const createCharacter = async (character: any) => {
  const findCountry = countries.find((c) => c.name === character.country);
  const filteredSports = sports
    .filter((sport) => character.sports.includes(sport.name))
    .map((sport) => ({ name: sport.name, icon: sport.icon }));

  const newData = {
    id: Date.now(),
    name: character.name,
    gender: character.gender,
    age: character.age,
    height: character.height,
    image: character.image,
    country: findCountry
      ? { name: findCountry.name, flag: findCountry.flag }
      : {},
    sports: filteredSports,
  };

  // Leer el archivo JSON existente
  jsonfile.readFile(file, (err: Error, data: any) => {
    if (err) {
      throw new ClientError("Error reading file.", 400);
    }

    // Agregar los nuevos datos al array existente
    data.push(newData);

    // Escribir el JSON actualizado de vuelta al archivo
    jsonfile.writeFile(file, data, { spaces: 2 }, (err: Error) => {
      if (err) {
        throw new ClientError("Error writing to file.", 400);
      }
    });
  });

  return newData;
};

const updateCharacter = async (id: number, character: any) => {
  const findCountry = countries.find((c) => c.name === character.country);
  const filteredSports = sports
    .filter((sport) => character.sports.includes(sport.name))
    .map((sport) => ({ name: sport.name, icon: sport.icon }));

  const newData = {
    id: id,
    name: character.name,
    gender: character.gender,
    age: character.age,
    height: character.height,
    image: character.image,
    country: findCountry
      ? { name: findCountry.name, flag: findCountry.flag }
      : {},
    sports: filteredSports,
  };

  // Leer el archivo JSON existente
  jsonfile.readFile(file, (err: Error, data: any) => {
    if (err) {
      throw new ClientError("Error reading file.", 400);
    }

    // Encuentra el objeto que deseas actualizar (por ejemplo, por su id)
    const characterToUpdate = data.find((element: any) => element.id === id);

    // Actualiza los campos del objeto
    if (characterToUpdate) {
      (characterToUpdate.id = id),
        (characterToUpdate.name = character.name),
        (characterToUpdate.gender = character.gender),
        (characterToUpdate.age = character.age),
        (characterToUpdate.height = character.height),
        (characterToUpdate.image = character.image),
        (characterToUpdate.country = findCountry
          ? { name: findCountry.name, flag: findCountry.flag }
          : {}),
        (characterToUpdate.sports = filteredSports);
    }

    // Escribir el JSON actualizado de vuelta al archivo
    jsonfile.writeFile(file, data, { spaces: 2 }, (err: Error) => {
      if (err) {
        throw new ClientError("Error writing to file.", 400);
      }
    });
  });

  return newData;
};

const deleteCharacter = async (id: number) => {
  // Leer el archivo JSON existente
  jsonfile.readFile(file, (err: Error, data: any) => {
    if (err) {
      throw new ClientError("Error reading file.", 400);
    }

    // Encuentra el índice del objeto que deseas eliminar (por ejemplo, por su id)
    const characterToDelete = data.findIndex(
      (element: any) => element.id === id
    );

    // Escribir el JSON actualizado de vuelta al archivo
    if (characterToDelete !== -1) {
      data.splice(characterToDelete, id);
    }

    // Escribir el JSON actualizado de vuelta al archivo
    jsonfile.writeFile(file, data, { spaces: 2 }, (err: Error) => {
      if (err) {
        throw new ClientError("Error writing to file.", 400);
        // console.error("Error writing to file:", err);
        // return;
      }
    });
  });

  return "Eliminated character.";
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
