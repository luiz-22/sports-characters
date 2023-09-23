import { DataTypes, Model, Sequelize } from "sequelize";

export class Sport extends Model {
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
      tableName: "sports", // Nombre de la tabla en la base de datos
      timestamps: false, // Desactivar los campos createdAt y updatedAt
    }
  );
};

// Aquí puedes definir relaciones u otros métodos relacionados con el modelo Sport
