import { Sport } from "../db";

const getSports = async () => {
  return await Sport.findAll();
};

export const sportsService = { getSports };
