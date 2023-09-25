import { DataTypes, Model, Sequelize } from "sequelize";

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
      tableName: "sports",
      timestamps: false,
    }
  );
};

export { Sport };
