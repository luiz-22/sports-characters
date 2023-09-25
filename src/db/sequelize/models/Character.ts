import { DataTypes, Model, Sequelize } from "sequelize";
import { Sport } from "./Sport";

class Character extends Model {
  addSports(sportDb: any) {
    throw new Error("Method not implemented.");
  }
  addSport(sport: Sport) {
    throw new Error("Method not implemented.");
  }
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
};

export { Character };
