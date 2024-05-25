// src/infrastructure/controllers/adminController.ts
import express from 'express';
// import { AdminUseCase } from '../../application/use-cases/adminUseCase';
import { AdminUseCase } from '../../aplication/use-cases/adminUseCase';

const adminUseCase = new AdminUseCase();

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await adminUseCase.login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export { router as adminController }; // Exportamos el router como adminController
