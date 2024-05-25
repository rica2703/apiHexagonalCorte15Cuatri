import { Request, Response, Router } from 'express';
// import { employeeUseCase } from '../../application/use-cases/employeeUseCase';
import { employeeUseCase } from '../../aplication/use-cases/employeeUseCase';

const router = Router();

router.post('/create', async (req: Request, res: Response) => {
  const { name, salary, bonus } = req.body;
  try {
    const employee = await employeeUseCase.createEmployee(name, salary, bonus);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const employees = await employeeUseCase.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await employeeUseCase.deleteEmployee(parseInt(id));
    res.status(200).json({ message: 'Empleado eliminado satisfactoriamente' });
  } catch (error) { 
    if (error === 'Employee not found') {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, salary, bonus } = req.body;

  try {
    const employee = await employeeUseCase.updateEmployee(parseInt(id), name, salary, bonus);
    if (!employee) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;