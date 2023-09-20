import { sports } from "../data/index";

const getSports = async () => {
  return sports;
};

export const sportsService = { getSports };
