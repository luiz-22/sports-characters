import { connect } from "mongoose";
import { envs } from "../../config/envs";
import Sport from "./schemas/Sport";
import Country from "./schemas/Country";
import Character from "./schemas/Character";
import ClientError from "../../errors/errors";

try {
  connect(envs.MONGO_URI);
} catch (error) {
  throw new ClientError("Error connecting to the database.");
}

export { Sport, Country, Character };
