// src/main.ts
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
// import adminController from './infrastructure/controllers/adminController';
import employeeController from './infrastructure/controllers/employeeController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MySQL Connection
sequelize.authenticate()
  .then(() => console.log('Connected to MySQL'))
  .catch((err: any) => console.error('Unable to connect to MySQL:', err));

// Sync models
sequelize.sync();

// Routes
// app.use('/admin', adminController);
app.use('/employee', employeeController);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
