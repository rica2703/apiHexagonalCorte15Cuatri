// src/application/use-cases/adminUseCase.ts
import { AdminRepository } from '../../infrastructure/repositories/adminRepository';
import { Admin } from '../../domain/entities/Admin';
import { AdminMongoAdapter } from '../../adapters/adminMongoAdapter';

const adminRepository: AdminRepository = new AdminMongoAdapter();

export class AdminUseCase {
  async login(username: string, password: string): Promise<string> {
    const admin = await adminRepository.findByUsername(username);
    if (!admin || admin.password !== password) {
      throw new Error('Invalid credentials');
    }
    return 'dummy_token';
  }
}

export const adminUseCase = new AdminUseCase();
