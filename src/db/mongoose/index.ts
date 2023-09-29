import mongoose, { Connection } from "mongoose";
import { envs } from "../../config/envs";
import { sportSchema, Sport } from "./schemas/Sport";
import CountryModel from "./schemas/Country";
import CharacterModel from "./schemas/Character";

const conn: Connection = mongoose.createConnection(envs.MONGO_URI);

const Sport = conn.model<Sport>("Sport", sportSchema);
// const Country = conn.model("Country", CountryModel);
// const Character = conn.model("Character", CharacterModel);

export { Sport };
