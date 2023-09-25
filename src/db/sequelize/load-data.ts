import { Country } from "./models/Country";
import { Sport } from "./models/Sport";

// Importa fs (sistema de archivos) para leer el archivo JSON
import fs from "fs";

const jsonDataPath = "../sports-characters/src/data/countries.json";
const jsonDataPath1 = "../sports-characters/src/data/sports.json";

// Función para leer el archivo JSON y llenar la tabla Country
async function seedCountries() {
  try {
    const jsonData = fs.readFileSync(jsonDataPath, "utf-8");

    // Parsea el JSON a un array de objetos
    const countriesData = JSON.parse(jsonData);

    // Utiliza bulkCreate para insertar los registros en la tabla Country
    await Country.bulkCreate(countriesData);

    console.log("Countries seeded successfully.");
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

    console.log("Sports seeded successfully.");
  } catch (error) {
    console.error("Error seeding sports:", error);
  }
}

export { seedCountries, seedSports };
