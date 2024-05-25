create database empleados;
use empleados;
grant all privileges on empleados.*to'ricardo'@'localhost';
CREATE TABLE empleado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    bono DECIMAL(10, 2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
alter user 'ricardo'@'localhost'IDENTIFIED WITH mysql_native_password BY 'parangar01';
select * from empleado;