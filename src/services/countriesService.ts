import { countries } from "../data/index";

const getCountries = async () => {
  return countries;
};

export const countriesService = { getCountries };
