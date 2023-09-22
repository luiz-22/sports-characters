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

const createCharacter = async (data: any) => {
  const findCountry = countries.find((c) => c.name === data.country);
  const filteredSports = sports
    .filter((sport) => data.sports.includes(sport.name))
    .map((sport) => ({ name: sport.name, icon: sport.icon }));

  const newData = {
    id: Date.now(),
    name: data.name,
    gender: data.gender,
    age: data.age,
    height: data.height,
    image: data.image,
    country: findCountry
      ? { name: findCountry.name, flag: findCountry.flag }
      : {},
    sports: filteredSports,
  };

  // Leer el archivo JSON existente
  jsonfile.readFile(file, (err: Error, data: any) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    // Agregar los nuevos datos al array existente
    data.push(newData);

    // Escribir el JSON actualizado de vuelta al archivo
    jsonfile.writeFile(file, data, { spaces: 2 }, (err: Error) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      return newData;
    });
  });
};

export const charactersService = {
  getCharacters,
  getCharacterByName,
  getCharacterById,
  getCharacterByGender,
  getCharacterByCountry,
  getCharacterBySport,
  createCharacter,
};
