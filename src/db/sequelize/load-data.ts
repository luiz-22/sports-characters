import { Country } from "./models/Country";

// Importa fs (sistema de archivos) para leer el archivo JSON
import fs from "fs";

const jsonDataPath = "../sports-characters/src/data/countries.json";

// Función para leer el archivo JSON y llenar la tabla Country
async function seedCountries() {
  try {
    // Lee el contenido del archivo JSON
    const jsonData = fs.readFileSync(jsonDataPath, "utf-8");

    // Parsea el JSON a un array de objetos
    const countriesData = JSON.parse(jsonData);

    //console.log(countriesData);

    // Utiliza bulkCreate para insertar los registros en la tabla Country
    await Country.bulkCreate(countriesData);

    console.log("Countries seeded successfully.");
  } catch (error) {
    console.error("Error seeding countries:", error);
  }
}

export { seedCountries };
