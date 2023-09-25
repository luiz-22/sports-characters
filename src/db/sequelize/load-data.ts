import { Character } from "./db";
import { Country } from "./db";
import { Sport } from "./db";

// Importa fs (sistema de archivos) para leer el archivo JSON
import fs from "fs";

const jsonDataPath = "../sports-characters/src/data/countries.json";
const jsonDataPath1 = "../sports-characters/src/data/sports.json";
const jsonDataPath2 = "../sports-characters/src/data/characters.json";

// Función para leer el archivo JSON y llenar la tabla Country
async function seedCountries() {
  try {
    const jsonData = fs.readFileSync(jsonDataPath, "utf-8");

    // Parsea el JSON a un array de objetos
    const countriesData = JSON.parse(jsonData);

    // Utiliza bulkCreate para insertar los registros en la tabla Country
    await Country.bulkCreate(countriesData);
  } catch (error) {
    console.error("Error seeding countries:", error);
  }
}

// Función para leer el archivo JSON y llenar la tabla Sport
async function seedSports() {
  try {
    const jsonData = fs.readFileSync(jsonDataPath1, "utf8");

    // Parsea el JSON a un array de objetos
    const sportsData = JSON.parse(jsonData);

    // Utiliza bulkCreate para insertar los registros en la tabla Sport
    await Sport.bulkCreate(sportsData);
  } catch (error) {
    console.error("Error seeding sports:", error);
  }
}

async function seedCharacters() {
  try {
    const jsonData = fs.readFileSync(jsonDataPath2, "utf-8");
    const charactersData = JSON.parse(jsonData);

    for (const characterData of charactersData) {
      const country: any = await Country.findOne({
        where: {
          name: characterData["country"]["name"],
        },
      });

      let newCharacter = await Character.create({
        id: characterData.id,
        name: characterData.name,
        gender: characterData.gender,
        age: characterData.age,
        height: characterData.height,
        image: characterData.image,
        CountryId: country ? country.id : 0,
      });

      //console.log(characterData.sports);
      characterData.sports.forEach(async (el: any) => {
        let sportDb = await Sport.findAll({
          where: { name: el.name },
        });

        
      });
    }
  } catch (error) {
    console.error("Error seeding characters:", error);
  }
}

export { seedCountries, seedSports, seedCharacters };
