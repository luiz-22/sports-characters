//import { Sport } from "../index";
import { Sport } from "../index";

const getSports = async () => {
  //return await Sport.list();
  return Sport.find();
};

export const sportsService = { getSports };
