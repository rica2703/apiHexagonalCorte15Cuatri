// src/infrastructure/repositories/adminRepository.ts
import { Admin } from '../../domain/entities/Admin';

export interface AdminRepository {
  findByUsername(username: string): Promise<Admin | null>;
}
