// src/infrastructure/repositories/employeeRepository.ts
import { Employee } from '../../domain/entities/Employee';

export interface EmployeeRepository {
  create(employee: Employee): Promise<Employee>;
  findAll(): Promise<Employee[]>;
}
