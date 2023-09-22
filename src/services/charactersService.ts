import { characters } from "../data/index";
import ClientError from "../errors/errors";
const jsonfile = require("jsonfile");
const file = "../sports-characters/src/data/characters.json";

const getCharacters = async () => {
  console.log(characters);
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
    ch.sports.filter((s) => s.name === sport)
  );
  return charactersBySport;
};

const createCharacter = async () => {
  const newData = {
    id: 35,
    name: "Pepe",
    gender: "Male",
    age: 32,
    height: 1.85,
    image:
      "https://assetsio.reedpopcdn.com/digitalfoundry-2015-is-batman-arkham-knight-the-generational-leap-we-were-hoping-for-1435051185884.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    country: {
      name: "Australia",
      flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg",
    },
    sports: [
      {
        name: "badminton",
        icon: "🏸",
      },
      {
        name: "ice skating",
        icon: "⛸️",
      },
    ],
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
        console.error("Error al escribir en el archivo:", err);
        return;
      }
      console.log("Datos agregados correctamente.");
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
