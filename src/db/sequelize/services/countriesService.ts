import { Country } from "../db";

const getCountries = async () => {
  return await Country.findAll();
};

export const countriesService = { getCountries };
