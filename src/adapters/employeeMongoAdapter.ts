// src/adapters/employeeMongoAdapter.ts
import { EmployeeRepository } from '../infrastructure/repositories/employeeRepository';
import { Employee } from '../domain/entities/Employee';
import EmployeeModel from '../domain/models/EmployeeModel';

export class EmployeeMongoAdapter implements EmployeeRepository {
  async create(employee: Employee): Promise<Employee> {
    const createdEmployee = await EmployeeModel.create(employee);
    return createdEmployee.toObject();
  }

  async findAll(): Promise<Employee[]> {
    const employees = await EmployeeModel.find().exec();
    return employees.map((employee) => employee.toObject());
  }
}
