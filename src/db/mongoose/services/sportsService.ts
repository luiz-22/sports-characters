import SportModel from "../schemas/Sport";

const getSports = async () => {
  //return await SportModel.list();
  console.log(SportModel.list());
  return "hola";
};

export const sportsService = { getSports };
