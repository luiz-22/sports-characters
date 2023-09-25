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
      tableName: "country",
      timestamps: false,
    }
  );
};

export { Country };