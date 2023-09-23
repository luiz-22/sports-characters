import { DataTypes, Model, Sequelize } from "sequelize";

class Country extends Model {
  public id!: number;
  public flag!: string;
  public name!: string;
  public code!: string;
}

export const initCountryModel = (sequelize: Sequelize) => {
  Country.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "countries", // Nombre de la tabla en la base de datos
      timestamps: false, // Desactivar los campos createdAt y updatedAt
    }
  );
};

// Aquí puedes definir relaciones u otros métodos relacionados con el modelo Country
