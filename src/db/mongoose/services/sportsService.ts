import { Sport } from "../index";

const getSports = async () => {
  return await Sport.find();
};

export const sportsService = { getSports };
