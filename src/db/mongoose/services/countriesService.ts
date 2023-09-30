import { Country } from "../index";

const getCountries = async () => {
  return await Country.find();
};

export const countriesService = { getCountries };
