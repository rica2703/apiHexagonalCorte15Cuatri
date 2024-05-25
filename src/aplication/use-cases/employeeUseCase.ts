// src/application/use-cases/employeeUseCase.ts
// src/application/use-cases/employeeUseCase.ts
import Employee from '../../models/Employee';

export class EmployeeUseCase {
  async createEmployee(name: string, salary: number, bonus: number): Promise<Employee> {
    const employee = await Employee.create({ name, salary, bonus });
    return employee;
  }

  async getAllEmployees(): Promise<Employee[]> {
    return await Employee.findAll();
  }

  async deleteEmployee(id: number): Promise<void> {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      throw new Error('Employee not found');
    }

    await employee.destroy();
  }

  async updateEmployee(id: number, name?: string, salary?: number, bonus?: number): Promise<Employee | null> {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      return null;
    }

    if (name) {
      employee.name = name;
    }

    if (salary) {
      employee.salary = salary;
    }

    if (bonus) {
      employee.bonus = bonus;
    }

    await employee.save();
    return employee;
  }
}

export const employeeUseCase = new EmployeeUseCase();