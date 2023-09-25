import { DataTypes, Model, Sequelize } from "sequelize";
import { Character } from "./Character";

class Sport extends Model {
  public id!: number;
  public name!: string;
  public icon!: string;
}

export const initSportModel = (sequelize: Sequelize) => {
  Sport.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "sport",
      timestamps: false,
    }
  );

  // Sport.belongsToMany(Character, {
  //   through: "CharacterSports", // Nombre de la tabla intermedia que Sequelize creará automáticamente
  //   foreignKey: "sportId", // Nombre de la clave foránea en la tabla intermedia que hace referencia a Sport
  // }); 
};

export { Sport };
