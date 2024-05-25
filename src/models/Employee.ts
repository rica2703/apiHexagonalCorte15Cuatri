// src/models/Employee.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Employee extends Model {
  public id!: number;
  public name!: string;
  public salary!: number;
  public bonus!: number;
}

Employee.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bonus: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'employees',
  sequelize, // passing the `sequelize` instance is required
});

export default Employee;
