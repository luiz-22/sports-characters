import { DataTypes, Model, Sequelize } from "sequelize";
import { Sport } from "./Sport";

class Character extends Model {
  public id!: number;
  public name!: string;
  public gender!: "Male" | "Female";
  public age!: number;
  public height!: number;
  public image!: string;

  // Relación 1:M con Country
  public readonly countryId!: number; // Esto será configurado por Sequelize automáticamente

  // Define la relación N:M con Sport
  public getSports!: () => Promise<Sport[]>;
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
      tableName: "characters", // Nombre de la tabla en la base de datos
      timestamps: false, // Desactivar los campos createdAt y updatedAt
    }
  );

  // Define la relación N:M con Sport
  Character.belongsToMany(Sport, {
    through: "CharacterSport", // Nombre de la tabla de unión en la base de datos
  });
};

// Aquí defines las relaciones con otros modelos (Country) en el archivo apropiado.

export { Character }; // Exporta el modelo Character
