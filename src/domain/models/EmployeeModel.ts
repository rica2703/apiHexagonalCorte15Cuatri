// src/domain/models/EmployeeModel.ts
import mongoose, { Document } from 'mongoose';

interface EmployeeDocument extends Document {
  name: string;
  salary: number;
  bonus: number;
}

const employeeSchema = new mongoose.Schema({
  name:  String,
  salary:  Number,
  bonus:Number
});

const EmployeeModel = mongoose.model<EmployeeDocument>('Employee', employeeSchema);

export default EmployeeModel;
