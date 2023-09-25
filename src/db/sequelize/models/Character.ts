import { DataTypes, Model, Sequelize } from "sequelize";
import { Sport } from "./Sport";

class Character extends Model {
  public id!: number;
  public name!: string;
  public gender!: "Male" | "Female";
  public age!: number;
  public height!: number;
  public image!: string;
}

export const initCharacterModel = (sequelize: Sequelize) => {
  Character.init(
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
      gender: {
        type: DataTypes.ENUM("Male", "Female"),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0.01,
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "character",
      timestamps: false,
    }
  );

  // Character.belongsToMany(Sport, {
  //   through: "CharacterSports", // Nombre de la tabla intermedia que Sequelize creará automáticamente
  //   foreignKey: "characterId", // Nombre de la clave foránea en la tabla intermedia que hace referencia a Character
  // });
};

export { Character };
